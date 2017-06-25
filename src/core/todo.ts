export class Todo {
  completed: boolean = false;

  content: string;

  constructor(content: string) {
    this.content = content;
  }
}
