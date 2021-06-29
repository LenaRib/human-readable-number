module.exports = function toReadable(number) {

    function readNine(number) {
        switch (number) {
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            default: return '';
        }
    }

    function readTwoDigit(number) {
        switch (number) {
            case undefined: return '';
            case 0: return '';
            case 2: return 'twenty';
            case 3: return 'thirty';
            case 4: return 'forty';
            case 5: return 'fifty';
            default: return readNine(number) + 'ty';
        }
    }

    function readTwoDigitNumber(number) {
        if (number >= 10 && number <= 15) {
            switch (number) {
                case 10: return 'ten';
                case 11: return 'eleven';
                case 12: return 'twelve';
                case 13: return 'thirteen';
                case 14: return 'fourteen';
                case 15: return 'fifteen';
                default: return '';
            }
        } else if (number >= 16 && number <= 19) {
            if (number === 18) return 'eighteen';
            return readNine(number % 10) + 'teen';
        } else if (number >= 20 && number <= 99) {
            let reminder = number % 10;
            let integer = number / 10;
            let tens = Math.trunc(integer);
            return readTwoDigit(tens) + ' ' + readNine(reminder);
        }
        else return '';
    }

    if (number >= 0 && number <= 9) { return readNine(number); }
    else if (number >= 10 && number <= 99) { return readTwoDigitNumber(number); }
    else if (number >= 100) {
        let reminder = number % 100;
        let hundreds = Math.trunc(number / 100);
        let tens = Math.trunc(reminder);
        return readNine(hundreds) + ' hundred ' + readTwoDigitNumber(reminder) + ' ' + readNine(reminder);
    }
}
