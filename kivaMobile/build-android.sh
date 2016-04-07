#! /bin/bash
if tns run android 
  then echo "Found Device..."
else 
  tns run android --emulator
fi
exit $?
