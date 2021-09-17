---
title: 'Working with array in Golang'
date: '2020-12-09'
description: "All you need to know about array in Go"
---

## 1. What is array in Go?
In Golang, array is a collection of data with fixed length and type (emphasized on the word "fixed"). Since Go is a statiscally-typed language, once you assign a type or length to an array, it cannot be changed. 

Here is an example of an array of 3 string value

```
s:=[3]string{"hello", "new", "world"}

```

## 2. Length and type of Go array
Before we come to declaring an array, we need to know its length and type. 

#### - Syntax
Length is put inside square bracket [] and type is written right next to it. 

```
var s [3]string

```

#### - Length value 
- Length can be both constant or constant expression like
```
var s [3+2]string

```

## 2. How to declare an array in Go?

There are several ways to declare/ instantiate an array in Go.

#### 1 - Using variable declaration 

```
var s [3]string
```

#### 2 - Using array literal

```
s := [3]string{"hello", "new", "world"}
```
