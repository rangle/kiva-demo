#! /bin/bash
if tns run ios 
  then echo "Found Device..."
else 
  tns run ios --emulator
fi
exit $?
