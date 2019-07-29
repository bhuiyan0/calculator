  function backspace() {
            var v = document.getElementById('display').value;
            //document.getElementById('display').value = v.substring(0, v.length - 1);
            document.calculator.display.value = v.substring(0, v.length - 1);
        }
        function dot() {
            var v = document.getElementById('display').value;
            len = v.length;
            for (var i = 0; i < len; i++) {
                if (v.charAt(i) == '.') {
                    return;
                }
            }
            document.calculator.display.value += '.';
        }
        function zero() {
            var v = document.getElementById('display').value;
            var len = v.length;
            if (len == 0) {
                return;
            }
            document.calculator.display.value += '0';
        }

        function inputNum(e) {
            document.calculator.display.value += e;
        }

        function opClick(e) {
            var v = document.getElementById('display').value;
            var len = v.length - 1;
            if (v.charAt(len) == '+' || v.charAt(len) == '-' || v.charAt(len) == '/' || v.charAt(len) == '*' || v.charAt(len) == '%') {
                return;
            }
            document.calculator.display.value += e;
        }
