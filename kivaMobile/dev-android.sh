#! /bin/bash
if tns livesync android --watch
  then echo "Found Device..."
else
  tns livesync android --watch --emulator
fi
exit $?
