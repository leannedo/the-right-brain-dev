---
title: 'What do we need to know about slices in Golang?'
date: '2021-04-28'
description: 'How to create a slice, its built-in functions and other things to remember'
---

# 1. Create a slice
We don't need to specify the length of slice before hand. Also length is not fixed. Here we instantiate a slice called `a`, which stores interger values. 

```
a := []int{1, 2}

```

# 2. Concatenate two slices 
Using spread operator like in JavaScript 

```
a := []int{3, 4, 5}

b := []int{1, 2, 3}

a = append(a, b...) // [3 4 5 1 2 3]

```

This is equal to this:

```
a := []int{3, 4, 5}

b := []int{1, 2, 3}

a = append(a, 1, 2, 3) // [3 4 5 1 2 3]

```

# 3. Using make function to create slices 

```
a := make([]int, 3) // only the type and length are specified
a := make([]int, 3, 10) // capacity is also specified
```
Here we use the make function to create a slice `a`. Make function receives 2 or 3 arguments, first argument is the type of values the slice will contain. The second argument is the length, and the 3rd argument, which is optional, is the capacity. 

## Things to note about length and capacity

If we just initialize a slice with length 3, whenever we want to add the 4th element into the slice, Go will copy the whole slice into a bigger container. 

An example for that is when you buy a just-big-enough box to store 3 cupcakes, then if you have another one, you have to find a bigger box to store your old 3 AND the new one. 

This computation is expensive, and in case we have a slice of too many elements, this would slow down our application. 

To avoid that, if we can somehow estimate the capacity of the slice before hand, like we can estimate how many cupcakes we are gonna have, we can buy a box to store, say 10 cupcakes, even though we just have 3 to start with. 

# 4. Slices are passed by reference 

Slices are backed by array, so they only contain the pointer to the array where actual elements are stored.

Unlike array (which is passed by value), when slice is copied, the copy still points to the same reference. Let's clear up with this example:

```
a := []int{1, 2, 3, 4}

b := a 

fmt.Printf("a array: %v\n", a) // a array: [1 2 3 4]

fmt.Printf("b array: %v", b) // b array: [1 2 3 4]

```

Let's test if a is copied by value or by reference by trying to change the value in b 

```
a := []int{1, 2, 3, 4}

b := a

b[0] = 5

```
What do you suggest the value of a to be? Will it stay the same? The answer is NO!

```
fmt.Printf("a array: %v\n", a) // a array: [5 2 3 4]

fmt.Printf("b array: %v", b) // b array: [5 2 3 4]

```
So we see that when a is copied, its copy (b) still points to the same address in memory, so when we make any change in b, it will reflect directly on the underlying array, and any slice that share the same backing will observe the change. 

# 5. Manipulate slices 

## ADD
When we want to add new element, we use `append` function. 

```
a := []int{1, 2}
	
a = append(a, 5)
	
fmt.Printf("a: %v", a) // [1 2 5]

```

## POP AT START
When we want to pop element off the start, we create a new copy of `a` without the first element. 

```
a := []int{1, 2, 3, 4, 5}
	
b := a[1:]
	
fmt.Printf("b: %v", b) // [2 3 4 5]

```

## POP AT END 
When we want to pop element off the end, we create a new copy of `a` without the last element. 

```
a := []int{1, 2, 3, 4, 5}
	
b := a[:len(a) - 1]
	
fmt.Printf("b: %v", b) // [1 2 3 4]

```

## POP AT MIDDLE
When we want to pop element off the middle, we have to concat 2 slices. 

```
a := []int{1, 2, 3, 4, 5}
	
b := a[:2]
	
b = append(b, a[3:]...)
	
fmt.Printf("b: %v", b)

```

Here we use 2 techniques above: ellipsis and ```append``` to first create a new slice b that is a copy of a but only from the first element up to (but not including) the element at index 2. 

Next we concat it with a copy of ```a``` starting from index 3 to the end. 

### REMEMBER 
The [index:] or [:index] or [index:index] notation means to extract the given slice from index at the left up to, but not including index at the right. 

The colon indicates start or end of the slice depending on when you put it. 

