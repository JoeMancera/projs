# Patrones de diseño

## ¿Qué son?
Son resetas para solucionar problemas comunes, es una *solución* para un *problema* dentro de un *contexto*

### Contexto
* El contexto es la situación donde le patrón aplica
* Esta situación debe ser _recurrente_
* Ej: Muchos objetos están interesados en el estado de otro objeto

### Problema

* Se refiere a la meta que estás tratando de alcanzar dentro del contexto
* El problema incluye todas las _limitaciones_ que existen dentro de este contexto
* Ej: Estos objetos quieren recibir la notificación cunado cambie el estado, sin tener que solicitar la información

### Solución

* Un diseño _genérico_ que alcanza la meta dentro del contexto
* Ej: Crear una clase donde cualquier objeto se pueda suscribir o desuscribir a cambios en el estado (Observer Pattern)

## Ejemplos

1. [Every Layout](https://every-layout.dev/) - Como acomodar elementos en una página
2. [Media Queries](https://mediaqueri.es/) - como acomodar info en diferentes tamaños de pantalla

## Historia

La idea de los patrones de diseño comienzan desde la arquitectura con **Christopher Alexander**.

Sus libros descrben patrones para construir arquitectura dinámica, como casas, pueblos y ciudades.

El libro que comenzó en el campo de patrones de diseño de software **Design Patterns** 1995 y describe los patrones fundamentales.

## Beneficios

1. Los patrones de diseño son una caja de herramientas de soluciones bien probadas a problemas comunes en diseño de software
2. Te promueven un lenguaje común que permite comunicarse de forma específica y eficiente

## Crítica

* Los patrones de diseño son una forma de complejidad
* Son soluciones a las limitaciones de un lenguaje de programación. Ej: *Java o C# no tienen funciones de alto nivel*
* > Cuando lo que tienes es un martillo todo te parece un cavo.

[https://blog.codinghorror.com/head-first-design-patterns/](https://blog.codinghorror.com/head-first-design-patterns/)

## Categorías

### **Patrones creacionales**

Proveen diferentes mecanismos para crear objetos
* Abstract factory
* Builder: Crear varios objetos a partir de uno base (jQuery `$('<h1 class="superbig">My favorite Pokemon</h1>);` -> `$('<h1 class="superbig">My favorite Pokemon</h1>).click(()=>{console.log('Llamando')});`)
* Factory method
* Prtotype
* Singelton

### **Patrones estructurales**

Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes
* Adapter (jQuery con compatibilidad de navegadores)
* Bridge
* Composite
* Decoration
* FaCade
* Flyweight
* Proxy: intercepta y calcula


### **Patrones comportamiento**

Gestiona algoritmos y responsabilidades entre objetos
* Chain of responsability
* Command
* Interpreter
* Iterator
* Mediator
* Memento
* Observer: un objeto le pasa es estado a los demás
* State
* Strategy
* Template Method
* Visitor

## Singelton (Creacional)

Es un patron que asegura que una clase solo tiene una instancia
Esta única instancia puede ser consumida por cualquier otro objeto

## Observer

es un patrón que nos permite suscribir un observador a un objeto, esto para identificar un tipo especifico de cambios, el que necesitemos para ese escenario y una vez cumplamos con nuestro objetivo, poder desuscribrlo
por ejemplo en un news letter, sockets o listeners

Redux es una libreria que aplica este concepto de patrón