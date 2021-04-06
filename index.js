module.exports = {
  /**
   * Sum of two numbers
   * @example n1=2, n2=3, result = 5
   * @param {*} n1 number one  
   * @param {*} n2 number two
   *  
   */
  sum: function (n1, n2) {
    return (this.isNumber(n1, n2) ? n1 + n2 : this.msgError());
  },
    /**
   * Rest of two numbers
   * @example n1=2, n2=3, result = -1
   * @param {*} n1 number one  
   * @param {*} n2 number two
   * 
   */
  rest: function (n1, n2) {
    return (this.isNumber(n1, n2) ? n1 - n2 : this.msgError());
  },
    /**
   * Multiplication of two numbers
   * @example n1=2, n2=3, result = 6
   * @param {*} n1 number one  
   * @param {*} n2 number two
   *  
   */
  multiplication: function (n1, n2) {
    return (this.isNumber(n1, n2) ? n1 * n2 : this.msgError());
  },
    /**
   * Division of two numbers
   * @example n1=2, n2=3, result = 6.3
   * @param {*} n1 number one  
   * @param {*} n2 number two
   *  
   */
  division: function (n1, n2) {
    return (this.isNumber(n1, n2) ? n1 / n2 : this.msgError());
  },
  /**
   * Message call when a number is not valid
   */
  msgError: function () {
    console.log('Un valor o ambos no son numericos')
  },
  /**
   * Validate both number and return a boolean
   * @param {*} n1 
   * @param {*} n2 
   */
  isNumber: function (n1, n2) {
    if(typeof n1 !== 'number' || typeof n2 !== 'number') {
      return false;
    };
    return true
  }
}