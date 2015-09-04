JavaScripting
=============

[![Join the chat at https://gitter.im/unioncollege-webtech/javascripting](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/unioncollege-webtech/javascripting?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An exercise walking through essential JavaScript language features, using the 
[JavaScripting workshop](https://github.com/sethvincent/javascripting) by
[Seth Vincent](https://github.com/sethvincent).

## Setup

To begin:

- [**Fork** this repository](https://guides.github.com/activities/forking/)
- [Create a new Cloud9 workspace](https://docs.c9.io/docs/setting-up-github-workspace) from your new repository.
  - Alternatively, you may [**clone**](http://gitref.org/creating/#clone) your new repository to your computer.
- In your new Cloud9 workspace, run this command in the terminal:
  
  ```sh
  npm install
  ```
  
  This will install and initialize the [JavaScripting workshop](https://www.npmjs.com/package/javascripting#run-the-workshop)
  on your Cloud9 workspace.

## Run the workshop

To begin the workshop, run the following command in your terminal:

```
javascripting
```

You’ll see the menu:

![javascripting screenshot](http://raw.githubusercontent.com/unioncollege-webtech/javascripting/master/screenshot.png)

Navigate the menu with the up & down arrow keys.

Choose a challenge by hitting enter.

## Verify

Verify your solution by running:

```sh
javascripting verify FILENAME
```

where `FILENAME` equals the name of the solution file. For instance, verifying
the first problem would be:

```sh
javascripting verify introduction.js
```

Once you’ve completed a solution, run

```sh
javascripting next
```

to go to the next problem, or

```sh
javascripting
```

to select a new problem from the menu.

## Commit your solutions

Work on all of the workshop problems,
[**committing**](http://gitref.org/basic/#commit)
and [pushing](http://gitref.org/remotes/#push) changes as you go.

## Submit your assignment

When you’ve completed all of the workshop problems,
[Create a pull request](https://help.github.com/articles/creating-a-pull-request)
from your `javascripting` repository to submit the assignment.

You are also welcome commit, push, and create a pull request **before** you’ve 
completed your solution. You can ask questions or request feedback there in 
your pull request. Just mention `@barberboy` in your comments to get my
attention.

## Questions/Comments/Feedback

If you have questions, comments, or run into problems, please post in the
[Gitter chat room](https://gitter.im/unioncollege-webtech/javascripting) for
this assignment. Click the "Gitter | Join Chat" button at the top of this 
README.