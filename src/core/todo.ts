export class Todo {
  completed: boolean = false;

  content: string;

  readonly id: string;

  constructor(content: string) {
    this.content = content;
    this.id = Math.random().toString(36).substring(2);
  }
}
