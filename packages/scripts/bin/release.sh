#!/bin/bash
if hig-scripts-has-stable-release ; then
  semantic-release
else
  echo "Skipping release."
fi
