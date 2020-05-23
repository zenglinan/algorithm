/**
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。可以多次买卖，注意你不能在买入股票前卖出股票。
 * 示例 1:
 * 输入: [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 *
 * 思路：遍历，只要发现前一天小于后一天，差值都是盈利收益
 */
function store(arr) {
  return arr.reduce((sum, price, i) => {
    if (!arr[i + 1]) return sum
    const diff = arr[i + 1] - price
    sum += diff > 0 ? diff : 0
    return sum
  }, 0)
}

console.log(store([7,1,5,3,6,4]))
