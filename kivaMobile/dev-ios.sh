#! /bin/bash
if tns livesync ios --watch
  then echo "Found Device..."
else
  tns livesync ios --watch --emulator
fi
exit $?
