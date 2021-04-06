module.exports = {
  /**
   * Sum of two numbers
   * @example n1=2, n2=3, result = 5
   * @param {*} n1 number one  
   * @param {*} n2 number two
   *  
   */
  sum: (n1, n2) => {
    return n1 + n2;
  },
    /**
   * Rest of two numbers
   * @example n1=2, n2=3, result = -1
   * @param {*} n1 number one  
   * @param {*} n2 number two
   * 
   */
  rest: (n1, n2) => {
    return n1 - n2;
  },
    /**
   * Multiplication of two numbers
   * @example n1=2, n2=3, result = 6
   * @param {*} n1 number one  
   * @param {*} n2 number two
   *  
   */
  multiplication: (n1, n2) => {
    return n1 * n2;
  },
    /**
   * Division of two numbers
   * @example n1=2, n2=3, result = 6.3
   * @param {*} n1 number one  
   * @param {*} n2 number two
   *  
   */
  division: (n1, n2) => {
    return n1 / n2;
  }
}