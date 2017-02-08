document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('generateHashDateTimeNow');
  checkPageButton.addEventListener('click', function() {

		var input = document.getElementById('inputDateTimeNow');
		input.value = new Date().YYYYMMDDHHMMSS();
		input.select();
		
		document.execCommand("copy");
		
  }, false);
}, false);


Object.defineProperty(Date.prototype, 'YYYYMMDDHHMMSS', {
    value: function() {
        function pad2(n) {  // always returns a string
            return (n < 10 ? '0' : '') + n;
        }

        return this.getFullYear() +
               pad2(this.getMonth() + 1) + 
               pad2(this.getDate()) +
               pad2(this.getHours()) +
               pad2(this.getMinutes()) +
               pad2(this.getSeconds());
    }
});