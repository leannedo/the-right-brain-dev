---
title: 'Code’nLearn 2: Separate UI from logic and the main program'
date: '02-06-2020'
---
There are three crucial parts of a Java program: main, the user interface, and the program logic.

## Main Program
Call the method start() of UserInterFace class to run the program.

```
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        PointsList pointsList = new PointsList();
        UserInterface ui = new UserInterface(scanner, pointsList);
        ui.start();
  
    }
}
```
## UserInterface class

Store the method start() and is responsible for receiving users’ inputs and printing outputs. It receives two objects as its main parameters: scanner class to read users’ input and the logic class to process the data. It’s important to divide the start() method into different methods reflecting each essential part of the UI.

```
import java.util.Scanner;
public class UserInterface {
    private Scanner scanner;
    private PointsList pointsList;
    
    public UserInterface(Scanner scanner, PointsList pointsList) {
        this.scanner = scanner;
        this.pointsList = pointsList;
    }
    
    public void start() {
        readInputs();
        printOutputs();
    }
    
    public void readInputs() {
      // some logic....
    }
    public int printOutputs() {
      // some logic....
    }
....
}
```
## The program logic

The core logic of the program and stores the class which is used to create the program’s object and other relating methods to process the data passed into it.

```
public class PointsList {
    private ArrayList<Integer> pointsList;
    private int passing;
    
    public PointsList() {
        this.pointsList = new ArrayList<>();
        this.passing = 0;
    }
    
    public void add(int points) {
        if (!(points < 0 || points > 100)) {
            this.pointsList.add(points);
        }        
    }
}
.....
```

I used to struggle at the beginning of each problem because I didn’t know what to do first and what next. The program’s logic and UI got tangled and hard to be put into, let’s say, “groups”. Yet, based on this knowledge, I now can get hold of the skeleton of each program, like I did with an essay in the past, and build upon from that.

## Sum it upppp!
Just a quick note from my experience with Java so far and I hope you don’t have to struggle like I did at the beginning. This knowledge touches a very surface of the concept of object-oriented programming, more from that in the next posts!
