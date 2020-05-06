var domain_format = function(value){
  return value.replace(getRegExp(/\./,'g'), '_')
}

var number_format = function(value){
  return parseInt(value, 10).toLocaleString()
}

var date_format = function(value){
  return value.trim().substring(0, 10)
}

var format_marksort_cnchar = function(num){
  var cnchar = [
    '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
    '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
    '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十',
    '三十一', '三十二', '三十三', '三十四', '三十五', '三十六', '三十七', '三十八', '三十九', '四十',
    '四十一', '四十二', '四十三', '四十四', '四十五',
  ];
  return cnchar[num - 1];
}

module.exports = {
  domain_format: domain_format,
  number_format: number_format,
  date_format: date_format,
  format_marksort_cnchar: format_marksort_cnchar
}
