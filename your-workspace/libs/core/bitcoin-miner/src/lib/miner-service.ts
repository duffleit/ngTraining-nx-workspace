export class MinerService {
  public mine(): string {
    const shuffle = (valueToShuffle: string) =>
      valueToShuffle
        .split('')
        .sort(function() {
          return 0.5 - Math.random();
        })
        .join('');
    return shuffle('abcdefghijklmnopqrstuvwxyz');
  }
}
