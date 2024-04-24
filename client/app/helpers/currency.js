import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(params) {
    const [number] = params;
    const numberString = number.toString();
    const rupiahs = numberString.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    return `${rupiahs}`;
  }
}
