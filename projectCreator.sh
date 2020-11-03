#!/bin/bash

# COMMAND - CREATE NEW PROJECT 
# inputs: [newProject]
# desc: creates new project folder in myProjects directory, creates GitHub repository, and makes first commit and push
function create() {
  cd ~
# check for input parameter
  if [ -z "$1" ]
    then
      echo "Enter a NAME for the new project"
    else
      newProject=$1
      echo "Creating ${newProject} . . ."
      # navigate to myProjects directory
      cd Documents/myProjects
      # create project folder
      mkdir ${newProject}
      # navigate into newProject folder
      cd ${newProject}
      # initialize as local repository
      git init
      # go to GitHub and create new repository, return ssh key for that repo.
      node ~/Documents/myProjects/projectCreator/projectCreator.js newProject
    fi
}