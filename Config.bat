@echo off
set /p token="Please enter your discord account token: "
set /p key="Please enter your midnight key: "
set /p prefix="Please enter your desired prefix (default is -): "
node ./Code/setup.js %token% %key% %prefix%
pause