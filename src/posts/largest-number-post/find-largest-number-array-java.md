---
title: 'Code’nLearn 1: Finding the largest number in an array using Java'
date: '27-04-2020'
---

When I first started learning coding, this used to be the problem (to me) was unsolvable. Why? You might ask. It seems simple and fairly straightforward. Well, not very much with someone whose thinking is a bit convoluted like me. In my head, everything seems a little bit more complicated than it truly is, and that is one of the matters I have to tackle when I learn to code.

Basically, because I could see the array presented in front of my eyes👆, I knew exactly which value/ which number was the largest one, and I forgot that a computer couldn’t see like I did. Also, I didn’t know how a computer could process the array to “churn out” the largest value in it. The result was: I had to find the answer on stackoverflow or ask JJ (not one, but a handsome deal of times) because I couldn’t wrap my head around the concept of “unknowing the known” then apply it to the computer.

However, when I began to learn Java a month ago, I started to understand the core factor of the problem (not because of Java, but I guess my brain has now used to think in a logical kind of way), and that lies in three keywords: first assign then compare and replace. When we don’t know something, for example “who is the strongest weightlifter in our class?”, we tend to assume that the current strongest one is someone named X, then we compare the total weights that X can lift to that of the next person. If the next person, someone named Y, could lift heavier weights, then Y now becomes the strongest one, and if not, X can still maintain the status. Keep doing like that and at the end, we have the answer for ourselves.

The solution to finding the largest number/value is similar to the above scenario in some way: we would have to assign the initial value (frequently 0 or the first value in the group) to the variable that stores the largest value, then compare that initial value to other elements in its group and replace it with the more suitable element.

## Statements we employ
There are two statements involving in our process, which is control flow statement (for loop / while loop / for each) and conditional statement (if…else). These two statements are extremely important and are basic of every computer program because repeating tasks is what computers are born to do.

**1. For loop**: 

The for loop is used to iterate over every element of an array or a list to find the most suitable element for the condition we set. The syntax in Java is as followed (assume we have 10 elements in the list)

```
for (int i = 0; i <= 10; i++) {
// some logic in here
}
```

What to do when we don’t know in advance the number of elements in the array or the list? No worries, we can always ask for the size of an array list or the length of an array.

```
for (int i = 0; i <= arrayList.size(); i++) {
// some logic in here
}
for (int i = 0; i <= array.length; i++) {
// some logic in here
}
```

**2. While loop**: 

Similar to the for loop used for iteration, yet it is used when the number of times we want the loop to run is not fixed.

```
while (true) {
    System.out.print("Enter a number: ");
}
```

**3. If…else statement**: 

This statement is used to compare our initial value with other values in the group to find out the “one and only” element that matches our search. In Java, it is used as below:

```
int largestValue = 0;
if ( nextValue > largestValue) {
    largestValue = nextValue;
}
```

## Context of the problem — User Input
With that knowledge, we will now our solution to find the largest number.

In Java, user’s inputs are read using Scanner which is a class from java.util package. It’s imported and declared like this:

```
import java.util.Scanner; 
public class nameOfClass {
    public static void main(String[] args) {
        Scanner scanner = new Scanner( System.in );
    }
}
```

We obtain the user’s inputs using Scanner’s method nextLine() and store that value in a variable. Yet, remember that the inputs are always in String type, so if we want to use them as numbers, we have to convert them using a Java method to return an Integer object:

```
int number = Integer.valueOf(scanner.nextLine());
```
The variable number will now track the most recent input entered by the user and is used in our if…statement to compare with the initial largest value.

```
int largestValue = 0;
if ( number > largestValue) {
    largestValue = number;
}
```

Working with user inputs, there are two scenarios that could happen: first is when we know in advance how many inputs we’re going to allow (for example 10 or 20), and second is when the number of inputs is not set at the beginning, but our program will stop receiving inputs when the user signals it by giving a certain indicator.

With the first situation, we simply have to declare a counter variable and let it count how many inputs we have received already and when it reaches the limit, the loop we set out to ask for input will stop.

```
int counter = 1;
while (counter <= 10) {
System.out.print("Enter a number: ");
int number = Integer.valueOf(scanner.nextLine());
}
```
With the second situation, we use a special value called sentinel value to indicate when the loop will stop (for example an empty string or the number -1).

```
int number;
while (number != -1) {
    System.out.print("Enter a number: ");
    int number = Integer.valueOf(scanner.nextLine());
}
```

or we can use an if…statement in the while loop to indicate when the program will stop if it meets the sentinel value. Personally, this is the way I usually implement in my program, which at the moment it’s just the matter of habit, and I guess I would have to write a post when I find out the exact reason.

```
while (true) {
    System.out.print("Enter a number: ");
    int number = Integer.valueOf(scanner.nextLine());
    if ( number == -1) {
        break;
    }
}
```

Finally, combining the knowledge of control flow statement and conditional statement, we’re going to solve our problem which used to appear so daunting to me in the past.

#### Largest number in a series of 10 inputs

```
int counter = 1;
int largestValue = 0; 
while (counter <= 10) {
    System.out.print("Enter a number: ");
    int number = Integer.valueOf(scanner.nextLine());
    if ( number > largestValue) {
        largestValue = number;
    }
    counter++; 
}
System.out.println("Largest number in the range: " + largest);
```

Here we have something to notice:
- We can declare the number variable outside of the while loop, creating a global variable, yet because we aren’t going to use it anywhere else in our program, we will declare it as a local variable so that it won’t take up as much memory as global variables do.
- This is a tiny teenee thing and I find it silly to mention, yet it was my mistake and I don’t want it to happen with anyone. That is we have to iterate the counter, or else it will forever remain 1 and will always less than 10, causing the loop to run forever.

#### Largest number in a series of unknown number of inputs — sentinel-controlled repetition

```
while (true) {
    System.out.print("Enter a number: ");
    int number = Integer.valueOf(scanner.nextLine());
    if ( number == -1) {
        break;
    }
    if ( number > largestValue) {
        largestValue = number;
    }
    counter++; 
}
System.out.println("Largest number in the range: " + largest);
```

Phew…we’ve reached the end of the post and I hope by this moment we’ve all been familiar with this type of problem, be it finding the smallest value or finding the person with “N” as the first letter of name. The concept is the same; we just need to modify our code a little bit. Personally, I feel a lot satisfied with myself because I have never thought that one day I could write a complete post about coding, using technical languages and markdown conventions and so on so forth.

Still, what I’ve learnt through this problem and this post are:
- Being able to use loops to repeat certain tasks
- Use if…statement to compare values
- Use while loop when asking for user input
- Use sentinel values to signal the end of data entry
- How to import Scanner to read user inputs
- How to convert String inputs to Integer ones

So, bye for now and see you in the next post!

