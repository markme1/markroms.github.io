#ADB-FRP-BYPASS
How to Use ADB Commands to Bypass FRP

1.Download the latest ***ADB Installer setup*** file from the internet.

2.Run the ***adb-setup.exe*** and type 'Y' and follow the on-screen instructions to install the ADB and fastboot driver.

3.Power on your device normally and connect it to your PC using USB cable.

4.Go to the folder where the adb drivers are installed. (In most cases they are installed in the C Drive (Windows Driver))

5.Hold down Shift, right-click anywhere blank in the adb folder, and select "Open command window here".

To remove FRP on **_Samsung devices_** via ADB commands: Type the following ADB FRP bypass command into the command prompt window one by one hitting Enter after each line.
'''
adb shell am start -n com.google.android.gsf.login/
'''
'''
adb hell am start -n com.google.android.gsf.login.LoginActivity
'''
'''
adb shell content insert --uri content://settings/secure --bind name:s:user_setup_complete --bind value:s:1
'''
To remove FRP on  **_Other Brands / MTK /SPD_** via ADB Commands Type the following ADB FRP bypass command into the command prompt window one by one hitting Enter after each line.
'''
adb hell content insert --uri content://settings/secure --bind name:s:user_setup_complete --bind value:s:1
'''
When the commands are all executed, the FRP lock will be removed from your device. That is the how to use ADB FRP bypass to remove the lock from your phone.
