---
title: 'Git and GitHub 123'
date: '15-07-2020'
---
Working as a developer is to befriend yourself with a horizon of concepts such as version control system, pushing to GitHub, git repos, pull requests, and so on. And to me they were not very easy to understand, and everytime I was asked to push my project to GitHub or create a new branch for the current work I was liked 'whaaaa are you talking about ??'

At first, I thought it was enough to just create a folder in my computer and do my work in peace, but until I took part in some Udemy courses, and the instructors said that they have a GitHub repo for this project, and we need to fork or clone them to our local, I realized that "I'm doomed". Not a single drop of Git runs in my knowledge vein. Then I decided to seriously learn version control system, and specifically Git.

Then it occurs to me that VCS or Git is nothing to be afraid of, or rather, really useful. So let's work our way through the Git jungle and grasp some sweet fruits from it.

## Main concepts

**Git** is a version control system. A version control system, or VCS, is a tool to manage all the versions of a work. Don't be mistaken that Git is so geek, and it's just for programmer-ish alone! You can use it for text-based documents, to collab with your friends on a list of recipes for New Year dishes, or more effectively, for your thesis.

I remember when I was writing my thesis, I have changed the introduction for like a thousand times. And I wish that I had known Git by then, so instead of creating intro-1.docx, intro-2.docx, intro-3.docx, I just need to let Git do its trick to save all the versions of the same file and show me the history of my changes and compare them all to me.

So long story short, Git is like a time machine or an actress with many faces, so you can apply each version to her own, and she will act accordingly.

**Git repo** is short for git repository, which is just a fancy name for the folders created under the management of Git.

**GitHub** is a cloud-based service allowing to upload/post your git repos. Simply put, it's like Google Drive, but instead of pushing intro-1, intro-2, or intro-3, you can push them all to the same repo, under different branches. You can use Git without GitHub if you work alone, or don't have a tendency to change your computer, or don't have any desire to showcase your projects online, or ... you are working in a cave.

**Git branch** is an independent line of development. It has to base on somewhere (a root) such as main or before they call master. But you can easily develop and keep your work in that branch, without contaminating the main branch where all the solid, spotless pieces of work are stored. Only when you are sure about your work that you can merge it to your main.

**Git Bash** is an application that allows you to work with Git through command lines.

## Git and GitHub workflow

- Firstly if you don't have your GitHub account, feel free to create one.
  
- Create a new project in your text editor (I'm using IntelliJ IDEA)

- Initialize a repo on GitHub by going to "repositories" and click "new", enter your repo name and DON'T select  "Initialize this repository with a README" when you already have your project in your local (This way is easier for beginners instead of creating a new repo in your local then push to GitHub)

- When done, you will head to the next step with the corresponding instructions. We will focus on "push an existing repository from the command line". If you don't have an existing project, you can use git init and follow through the instructions in "create a new repository on the command line".

- Open the project in your text editor (if you haven't) and go down to terminal and type
```  
git remote add origin <link-to-your-git-repo>
```
Follow with
```
git push -u origin master
```
to push your current project to GitHub.

- Hurray! We're done with the setting up.

Another way of pushing your project to GitHub using CLI like Git Bash. 
  
- Locating the folder that holds your project with `cd/disk_name/folder_name/folder_name`

- Go back to the previous folder with `cd ..`

- List all the files in your folder with `ls`

- When you are in the folder containing your project, you can type the 2 commands above in that order to push your project to GitHub.

## Some basic git commands

#### 1. git status

show you status of the files that you have touched in your directory. The green ones indicate add but not commit, and the red ones are outlawed which haven't been addeed to any management. 

#### 2. git branch branch-name

to create a new branch. 

#### 3. git branch 

to list all your branches in your local. 

#### 4. git checkout branch-name

to head to your desire branch

**** You can combine those and type `git checkout -b branch-name`

#### 5. git push origin branch-name

to push the final and most gorgeous version of your work. 

#### 6. create pull request

Before merging your work to main/master, it needs to be approved by someone else in your team. You should create a pull request, or PR, for it. If your PR is approved, you can freely merge them into main branch. 

#### 7. git merge branch-1 branch-2

This command is extremely useful when you can to update your current working branch with the main branch (when it has new changes). You just need to commit all your work, checkout to main, update it, checkout back, and merge main to your working branch, resolve any conflicts, and hit merge again. 

#### 8. git fetch && git rebase branch-1 branch-2

To update your working directory with new changes from upstream or origin, to ensure that your working branch is always up-to-date. If you and your teammate are working on the same file and there is any conflict, you have to resolve that conflict and agree on a unanimous version.

So, that's all for some basic commands to work with Git and GitHub. 

Thanks for following with me till the end. Please stay tune for more. Cheers!
