---
title: 'Working with array in Golang'
date: '2020-12-09'
description: "All we need to know about array in Go"
---

## 1. What is array in Go?
In Golang, array is a collection of data with fixed length and type (emphasized on the word "fixed"). Since Go is a statiscally-typed language, once we assign a type or length to an array, it cannot be changed. 

Here is an example of an array of 3 string value

```
s:=[3]string{"hello", "new", "world"}

```

## 2. Length and type of Go array
Before we come to declaring an array, we need to know its length and type. 

#### Syntax
Length is put inside square bracket [] and type is written right next to it. 

```
var s [3]string

```

#### Length value 
Length can be both constant or constant expression like

```
var s [3+2]string

```

## 3. How to declare an array in Go?

There are several ways to declare/ instantiate an array in Go.

#### Using variable declaration 

```
var s [3]string

```

#### Using array literal

```
s := [3]string{"hello", "new", "world"}

```
When we instantiate an array in this way, it will always contain 3 elements, even though we haven't declared it as the first place. Compared to using ellipsis in declaring array length:

#### Using ellipsis

```
s := [...]string{"hello", "new"}

```

The elements that we explicitly write out will determine the length of your array. In this case, the array contains only 2 elements. Whereas with constant length, even though we declare it with 2 elements, the rest will be filled with zero values of string, which is `""` aka empty string. 

```
s := [3]string{"hello", "new"}

```