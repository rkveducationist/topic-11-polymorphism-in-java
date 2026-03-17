const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"What is polymorphism in Java?",
options:[
"One method many forms",
"Multiple classes",
"Single object",
"Loop execution"
],
answer:"One method many forms",
hint:"Same name different behavior"
},

{
type:"mcq",
question:"Which type of polymorphism is method overloading?",
options:[
"Compile-time polymorphism",
"Runtime polymorphism",
"Dynamic polymorphism",
"None"
],
answer:"Compile-time polymorphism",
hint:"Resolved at compile time"
},

{
type:"mcq",
question:"Which type of polymorphism is method overriding?",
options:[
"Runtime polymorphism",
"Compile-time polymorphism",
"Static polymorphism",
"None"
],
answer:"Runtime polymorphism",
hint:"Resolved at runtime"
},

{
type:"mcq",
question:"What is method overloading?",
options:[
"Same method name with different parameters",
"Different method names",
"Same method name same parameters",
"Loop"
],
answer:"Same method name with different parameters",
hint:"Parameter difference"
},

{
type:"mcq",
question:"What is method overriding?",
options:[
"Child class redefining parent method",
"Same method",
"Different class",
"Loop"
],
answer:"Child class redefining parent method",
hint:"Runtime behavior"
},

{
type:"mcq",
question:"Which keyword is used in overriding?",
options:["@Override","extends","implements","new"],
answer:"@Override",
hint:"Annotation"
},

{
type:"mcq",
question:"Which concept allows same method name with different arguments?",
options:["Overloading","Overriding","Inheritance","Encapsulation"],
answer:"Overloading",
hint:"Compile-time"
},

{
type:"mcq",
question:"Which method is called in runtime polymorphism?",
options:[
"Child class method",
"Parent class method",
"Both",
"None"
],
answer:"Child class method",
hint:"Dynamic binding"
},

{
type:"mcq",
question:"What is required for method overriding?",
options:[
"Inheritance",
"Loop",
"Array",
"String"
],
answer:"Inheritance",
hint:"Parent-child relation"
},

{
type:"mcq",
question:"Can we overload main method?",
options:["Yes","No","Sometimes","Depends"],
answer:"Yes",
hint:"Multiple main methods allowed"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Create method overloading example with add(int,int) and add(double,double)",

required:["int","double","+","return"],

hint:"Same method name",

solution:`class Overload {

  static int add(int a, int b){
    return a + b;
  }

  static double add(double a, double b){
    return a + b;
  }

  public static void main(String[] args){
    System.out.println(add(2,3));
    System.out.println(add(2.5,3.5));
  }
}`
},

{
type:"code",
question:"Create method overloading with different number of parameters",

required:["int","+","return"],

hint:"Different parameters",

solution:`class Overload {

  static int add(int a, int b){
    return a + b;
  }

  static int add(int a, int b, int c){
    return a + b + c;
  }

  public static void main(String[] args){
    System.out.println(add(2,3));
    System.out.println(add(2,3,4));
  }
}`
},

{
type:"code",
question:"Create method overriding example with parent class Animal and child Dog",

required:["class","extends","system.out.println"],

hint:"Override method",

solution:`class Animal {
  void sound(){
    System.out.println("Animal sound");
  }
}

class Dog extends Animal {
  void sound(){
    System.out.println("Dog barks");
  }

  public static void main(String[] args){
    Dog d = new Dog();
    d.sound();
  }
}`
},

{
type:"code",
question:"Demonstrate runtime polymorphism using parent reference",

required:["class","extends","system.out.println"],

hint:"Parent reference child object",

solution:`class Animal {
  void sound(){
    System.out.println("Animal sound");
  }
}

class Dog extends Animal {
  void sound(){
    System.out.println("Dog barks");
  }
}

class Demo {
  public static void main(String[] args){
    Animal a = new Dog();
    a.sound();
  }
}`
},

{
type:"code",
question:"Create overriding example using @Override annotation",

required:["@override","extends","system.out.println"],

hint:"Use annotation",

solution:`class Parent {
  void display(){
    System.out.println("Parent method");
  }
}

class Child extends Parent {
  @Override
  void display(){
    System.out.println("Child method");
  }

  public static void main(String[] args){
    Child c = new Child();
    c.display();
  }
}`
},

{
type:"code",
question:"Create example to show method overloading with different data types",

required:["int","double","return"],

hint:"Different types",

solution:`class Demo {

  static int display(int a){
    return a;
  }

  static double display(double a){
    return a;
  }

  public static void main(String[] args){
    System.out.println(display(5));
    System.out.println(display(5.5));
  }
}`
}

]