### [Object-Oriented Design Patterns explained using practical examples](https://medium.com/@ronnieschaniel/object-oriented-design-patterns-explained-using-practical-examples-84807445b092 )

Refer: **Gang of Four Design Patterns Book** (23 design patterns) (E:\Documents\books_tech\ProgrammingDocs\DesignPatterns_docs)

**Creational Patterns:** -- used for creating new objects.

<details><summary>Abstract Factory</summary>

  * The Abstract Factory provides an interface for creating families of related or dependent objects without the need to specify their concrete classes.
  * Getter methods are provided to create and return new objects based on say a string value.
</details>
<details><summary>Factory Method</summary>

  * The Factory Method defines an interface for object creation but let's the subclass decide which object to create.
    * One interface is provided with a method
    * One abstract class is provided to return the interface implementation object and another method to perform the interface operation on the object calling the abstract interface object creation method.
    * Subclasses can call the implementation method in abstract class to do the operation on the interface method.
</details>
<details><summary>Builder</summary>

  * The Builder pattern is used to create objects with lot of attributes, by avoiding too many constructors.
  * A class with many attributes is defined with public methods (called builder methods) for each attribute, which accepts one attribute as parameter assigns to the class member and returns the class object (this).
  * The applicaiton class will instantiate the class with "new" adn by calling the builder methods one by one as needed.
</details>
<details><summary>Prototype</summary>

  * The prototype pattern uses clone() method to duplicate existing instances to be used as prototypes for the new instances.
  * This pattern is used if objects are expensive to create and new objects will be similar to the existing objects.
    * A provider class with a static map of new instances of the object is maintained for various keyword strings.
    * A public geterObject() method is defined to pick a specific instance based on a key type string passed and return the clone of the mapped instance object.
    * An interface of "Prototype" for example is defined with a interface method "clone()".
    * A class implementing "Prototype" intereface is implemented which along with getters, setters, constructors also implements the "clone()" method by calling super.clone() and casting it to the "Prototype" implementation class.
</details>
<details><summary>Singleton</summary>

    * A singleton pattern is used to ensure only one instance of an object and is globally accessible. e.g. Logging.
      * Constructors are made private and are called through the getInstance() method to return the object if the static instance is not yet initialized.
</details>

**Structural Patterns:** -- used to design relationships between objects.

<details><summary>Adapter</summary>

  * The Adapter pattern is used between two independent or incompatible interfaces, e.g. if a 3rd party code is used but can not be modified.
    * An interface class is defined. And the interface is implementated with the method calling the third party method.
    * In our application class we directly call the method on our interface implementation class instead of the 3rd party class method.
</details>
<details><summary>Bridge</summary>

  * The Bridge pattern is used to decouple interfaces from implementation, if there are hierarchies in interefaces as well as implementations.
  * It allows the abstraction and implementation to vary independently.
    * An interface is defined and multiple interface implementations are also defined to implement the interface method.
    * An abstract class is defined having the interface class as an object member and a constructor initializing it from parameter. 
    * The abstract class also defines an abstract method that need to be implemented by all the classes those extend the abstract class.
    * All the abstraction extension classes will implement a constructor will include the interface as a constructor parameter in addition to other attributes as needed.
    * Finally our client application class main() method instantiates the abstraction extension class with a new instance of an interface implementaiton class. And then call the interface method on the object.
</details>
<details><summary>Composite</summary>

  * The Composite pattern allows to treat a group of objects the same way as a single object.
  * This is for example used in tree-like object structures where a parent node's operaations influences or is dependent on child nodes.
    * E.g. Finding size of a folder depends on size of all its childern.
    * An interrface method is defined.
    * Implement a child (file) and a parent (folder) classes from the the interface (These two are independent classes, not related by class inheritence etc.).
    * The parent-representing class calls the method from the child-representing class.
</details>
<details><summary>Decorator - TBD</summary>

</details>
<details><summary>Facade</summary>

</details>
<details><summary>Flyweight</summary>

</details>
<details><summary>Proxy</summary>

</details>


**Behavioural Patterns:** -- used for communication between objects, reducing dependencies for better software design.

<details><summary>Chain of Responsibility</summary>

</details>
<details><summary>Command</summary>

</details>
<details><summary>Interpreter</summary>

</details>
<details><summary>Iterator</summary>

</details>
<details><summary>Mediator</summary>

</details>
<details><summary>Memento</summary>

</details>
<details><summary>Observer</summary>

</details>
<details><summary>State</summary>

</details>
<details><summary>Strategy</summary>

</details>
<details><summary>Template</summary>

</details>
<details><summary>Visitor

</details>