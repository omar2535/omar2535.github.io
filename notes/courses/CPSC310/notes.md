# Final exam notes

## RESTful Design

- Representational state transfer
- Localization of reasoning
- Reduction in propagation of change

### Basics

1. Client **requests** to Server
2. Server **responds** to Client

#### Examples

##### Example 1

1. Browser requests URL from Server
2. Server responds with HTML document to Browser

##### Example 2

1. App sends HTTP request to RESTful service (GET/PUT/POST/DELETE)
2. RESTful service responds with uniform resource identifiers (URI) to App

### Principles

- Resources are identified by Uniform Resource Identifiers (URIs) and must be **nouns**
    - Ex. `http://twitter.com/user/tweets`
    - Ex. `http://cookbook/dinner/bestDishes/3`
- Http requests (GET/PUT/POST/DELETE) are the only **verbs**
    - GET/PUT/POST/DELETE
        - GET: Retrieve a resource
        - POST: Store a new resource
        - PUT: Store a resource at existing URI
        - DELETE: remove a resource
    - Every resource must support all four verbs
- Client maintains state **(statelessness)**
    - server doesn't retain any state about the client
    - every request can be thought of as a one-off request
- Servers maintain resource structure **(connectedness)**
    - Does not force client to recall internal structure of server resources
    - Provice relevant links inside returned resources
    - Server sends links to related resources
- **Idempotence is important**, means that requests will result in the same state on the server regardless of how many times that same request is executed

## Design Principles

- Eliminate effects between unrelated things
- Design components that are:
    - self-contained
    - independent
    - have a single well-defined purpose
- Desired change -> Code smalls -> refactorings -> principled code

### Principles & Heuristics for modular design

- **S** : Single responsibility (high cohesion, low coupling)
- **O** : Open/Closed principle
- **L** : Liskov substitution
- **I** : Interfact segregation principle
- **D** : Dependency inversion principle

### Single responsibility principle

A class should only have a single responsibility.

#### Coupling

- How tightly a module is related to other modules
- Goal is loose coupling
- Changes in modules should not impact other modules; easier to work with them separately.

##### Types of coupling

- Content/Sementic coupling (high)
    - One module relies on inner working of another module (accessing local data of another module)
    - Changing the way second module produces data will lead to changing dependent module
- Common coupling
    - Two modules share the same global data
- External coupling
    - two modules share an externally imposed data format, protocol or device interface.
- Control coupling
    - One module controlling the flow of another
- Stamp coupling
    - When modules share composite data structure and only use part of it
- Data coupling
    - Modules share data through parameters
- Message coupling (low)
    - Loosest type of coupling, can be achieved by state decentralization
- No coupling
    - Modules do not communicate at all with one another

#### Cohesion

- Refers to how closely the functions in a module are related
- Modules should contain functions that logically belong together
- Classes should have a **single responsibility**

##### High cohesion

- Modules should contain functions that logically belong together


##### Bad

Causes divergent changes and feature envy

- Coincidental cohesion
    - When parts of a module are grouped arbitrarily. The only relationship between the parts is that they have been grouped together.
- Logical cohesion
    - When parts of a module are grouped because they logically are categorized to do the same thing even if they are different by nature
- Temporal cohesion
    - When parts of a module are grouped when they are processed

##### Very good

- Sequential cohesion
    - When parts of a module are grouped together because the output from one part is the input to another (read/write functions)

##### Best

- Functional cohesion
    - When parts of a module are grouped because they all contribute to a single well-defined task


### Open/closed principle

*Open for extension, closed for modification*

A class must be **closed** for internal change but **open** for extensions

### Liskov ssubstitution principle

*if **S** is a subtype of **T**, then objects of type **T** in a program my be replaced with objects of type **S** without altering any of the desirable properties of that program*

### Interface segregation principle

*many client-specific interfaces are better than one general-purpose interface*

- No client should be forced to depend on methods it does not use
- No implementation class should be forced to provide methods that do not fit into its abstraction
- A move towards role-based interfaces
- Clients need only know about the methods that are of interest to them
- Relates to high cohesion
- Violating the interface-segregation-principle is basically **forcing** implementors to violate the single-responsibility-principle

### Dependency inversion principle

*"depend upon abstractions, not concretions"*

- information hiding
    - only exponse necessary functions
    - hide complecity by emphasizing on essential characteristics and suppressing details
    - caller should not assume anything about how the interface is implemented
    - effects of internal changes are localized

### Summary

- Classes should do only **one thing**
- Don't force extenders to change the implementations directly
- Have small, role-specific interfaces
- Depend upon abstractions, not implementations
- Rework design so that changes are **localized**

## Objected oriented design patterns

There are 3 main categories of design patters. 

1. Creational design patterns are design pattersn that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.

2. Structural design patterns are design patterns that ease the design by identifying a simple way to realized relationships between entities.

3. Behavioural design patterns are design patterns that identify common communication patterns between objects and realize these patterns.

### Factory pattern

- Construction of object is complicated and for some reason involves behaviour outside the scope of the responsibility of the class itself.
- Not sure what kind of object you want to create at any particular time
- Solve this by implementing methods that create objects based on condition then run a common abstracted method

### Adapter pattern

- Convert interface of class into another interface clients expect
- Adapter lets classes work together that couldn't otherwise because of incompatible interfaces
- Wrap an existing class with a new interface

### State pattern

- A behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

### Strategy pattern

- Identical to state pattern except the client is choosing a single strategy and sticking with it
- Like if a barista never changed their mood state and stuck with it forever

### Composite design pattern

- By abstracting objects to a higher level such that code smells are reduced

## Ethics

### 1 General ethical principles

1. Contribute to society and to human well-being, acknowledging that all people are stakeholders in computing
2. Avoid harm
3. Be honest and trustworthy
4. Be fair and take action not to descriminate
5. Respect the work required to produce new ideas, inventions, creative works, and computing artifacts
6. Respect privacy
7. Honor confidentiality

### 2 Professional responsibilities

1. Strive to achieve high quality in both the provesses and products of professional work
2. Maintain high standards of professional competence, conduct, and ethical practice
3. Know and respect existing rules pertaining to professional work
4. Accept and provide appropriate professional review
5. Give comprehensive and thorough evaluations of computer systems and their impacts, including analysis of possible risks
6. Perform work only in areas of competence
7. Foster public awareness and understanding of computing, related technologies, and their consequences
8. Access computing and communication resources only when authorized or when compelled by the public good
9. Design and implement systems that are robustly and usably secure

### 3 Professional leadership principles

1. Ensure that the public good is the central concern during all professional computing work
2. Articulate, encourage acceptance of, and evaluate fulfillment of social responsiblities by members of the organization of group.
3. Manage personnel and resources to enhance quality of working life
4. Articulate, apply, and support policies and processes that reflect the principles of the code
5. Create opportunities for members of the organization or group to grow as professionals
6. Use care when modifying or retiring systems
7. Recognize and take special care of systems that become integrated into the infrastructure of society.

