export class ChecklistQuestion {

    lastAnswer: string = "";
    positiveAnswer: boolean = false;
    negativeAnswer: boolean = false;

    constructor(
      public htmlText: string,
      public passphrase: string,
    ) {}

    getLastAnswer(): string {
      return this.lastAnswer;
    }

    pass(): boolean {
      return this.lastAnswer === this.passphrase;
    }

    changeCheckedRadio(answer: string): void {
      this.lastAnswer = answer;
      if (answer === "DA") {
          this.positiveAnswer = true;
          this.negativeAnswer = false;
      } else if (answer === "NU") {
          this.positiveAnswer = false;
          this.negativeAnswer = true;
      }
  }
}
