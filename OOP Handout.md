## Intro to Object Oriented Programming

#### Key Vocabulary Terms

Object - a single location in memory having *state* and *behavior* specified by `properties` and `methods`. Think about software objects in terms of the *nouns* and *verbs* of real business processes.

Class - template/blueprint/recipe for creating multiple objects of the same type. Classes also provide a way to group place for static methods/properties

Instance - A single object of a given class, created with the `new` keyword. `new ClassName()` creates a new object in memory. Each object instance belongs to the same type of object, but is separate and distinct from each other object instance. To *instantiate* means to create a new instance.

Constructor - the method that creates an object. Constructor is called when you run `new ClassName()`

Visibility - What other code should be able to see your object, its properties, and call its methods? What should be public, protected, or private depends on the scenario. Favor hiding/encapsulating functionality and exposing public methods only when you need a way for other code to communicate to the object.

Static - contrary to the dictionary definition of unchanging, static means that a property or method belongs to the class and that we don't need to have any objects created in order to access either the property or method.


#### Key Concepts

- Encapsulation - hiding the internals of an object's behavior behind private/protected methods. The public methods on an object are its API. Each public method/property gives another puppet string on an object to other parts of the application. Each public method allows the object to be tangled with other objects, so be careful how much you make public.

- Data transfer objects - objects that exist to provide data and only data, not operations on that data. 

#### How to think in terms of objects/classes

1. Static does *not* mean unchanging, but rather a property or method that belongs to the class. You don't need an object to call a static method.
2. All Java code exists in classes. If you "just need a plain ol' function" then you will define a static method in a class. 

3. Objects should represent the state and behavior of the *nouns* and *verb*s in real world scenarios and business processes. Use objects to model the responsibilities of programs.