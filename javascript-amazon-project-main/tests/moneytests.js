import {CountPrice} from '../scripts/utils/utils.js'


if (CountPrice('2100') === '21.00'){
    console.log('passed')
}else{
    console.log('failed')
}


if (CountPrice('0') == '0.00'){
    console.log('passed')
}else{
    console.log('failed')
}
