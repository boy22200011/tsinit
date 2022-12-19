import { sayHello } from './descriptor';

class Member {
  @sayHello()
  say() {
    console.log('Hello World');
  }
}

const member = new Member();
member.say();

