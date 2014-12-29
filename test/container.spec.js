import {Container} from '../src/index';
import {isClass} from '../src/util';

class Calculator {
    add(a, b){
        return a + b;
    }
}

class Screen {
   display(content){
     console.log(content);
   }
}

describe('container', () => {
  it('should have some tests', () => {
    var container = new Container();
    expect(container).toBe(container);
  });
  
  
  it('Can create transient instance', () => {
    var container = new Container();
    container.registerTransient(Calculator,Calculator);
    var calc = container.get(Calculator);
    expect(calc instanceof Calculator).toBe(true);
  });

  
  it('test is setup correctly', ()=> {
    expect(true).toBe(true);
  });
});
