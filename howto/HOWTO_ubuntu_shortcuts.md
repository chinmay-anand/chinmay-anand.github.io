## Creating Desktop Shortcuts in Ubuntu and using it effectively
### QUERY:
```
What are various entries in a .desktop file?
```
### ANSWER:

Below is the content for **working version** of a .desktop file which invokes a yahoo mail search result and `Name`s the shortcut as "Caspex" and give the `Icon` for google chrome. You can use `xdg-open` to invoke the url using system default browser instead of chrome

```
[Desktop Entry]
Version=1.0
Type=Application
Name=Caspex
# Exec=xdg-open https://mail.yahoo.com/n/search/keyword=caspex
Exec=/usr/bin/google-chrome-stable https://mail.yahoo.com/n/search/keyword=caspex
# Icon=/usr/share/icons/gnome/48x48/apps/firefox.png
# Icon=firefox
Icon=google-chrome
Terminal=false
```

**Below are details of the entries in a `.desktop` shortcut file**

A `.desktop` file is a file that contains metadata about a desktop application, such as its name, icon, and executable. The file is used by the desktop environment to display the application's information and to launch the application when the user clicks on its icon.

Here are some common entries you might find in a `.desktop` file:

* `Name`: This entry specifies the name of the application. It is usually displayed in the application's menu entry and in the title bar of the application's window.
* `Exec`: This entry specifies the command that is executed when the user clicks on the application's icon. It is usually the path to the application's executable file.
* `Icon`: This entry specifies the icon that is displayed for the application. It can be a file path to an icon file, or a name of an icon theme.
* `Terminal`: This entry specifies whether the application should be run in a terminal window. If set to `true`, the application will be run in a terminal window. If set to `false`, the application will be run in a separate window.
* `Type`: This entry specifies the type of application. It can be one of the following:
	+ `Application`: This is the default type for most applications.
	+ `Link`: This type is used for links to other applications or files.
	+ `Directory`: This type is used for directories.
	+ `Folder`: This type is used for folders.
* `Categories`: This entry specifies the categories that the application belongs to. It is usually used to group applications together in the application menu.
* `Comment`: This entry specifies a comment about the application. It is usually displayed in the application's menu entry.
* `StartupNotify`: This entry specifies whether the application should be notified when the user starts the application. If set to `true`, the application will be notified when the user starts it.
* `StartupWMClass`: This entry specifies the window manager class for the application. It is usually used to specify the window manager that should be used to launch the application.
* `MimeType`: This entry specifies the MIME types that the application can handle. It is usually used to specify the types of files that the application can open.
* `Actions`: This entry specifies the actions that the application can perform. It is usually used to specify the actions that can be performed on the application's icon.
* `OnlyShowIn`: This entry specifies the desktop environments where the application should be displayed. It is usually used to specify the desktop environments where the application should be displayed.
* `NotShowIn`: This entry specifies the desktop environments where the application should not be displayed. It is usually used to specify the desktop environments where the application should not be displayed.

Here is an example of a `.desktop` file:
```
[Desktop Entry]
Name=My Application
Exec=/path/to/my/application
Icon=/path/to/my/icon.png
Terminal=false
Type=Application
Categories=Utility;
Comment=This is my application
StartupNotify=true
StartupWMClass=MyApplication
MimeType=text/plain;
Actions=Open;
OnlyShowIn=GNOME;
NotShowIn=KDE;
```
This `.desktop` file specifies the name, icon, and executable for the application, as well as some additional metadata such as the categories, comment, and startup notify settings.

### QUERY:
how to prepare a text file on ubuntu which works as an url shortcut on ubuntu, so that when I double click on that file on my ubuntu desktop, it opens that url in my default internet browser.

### ANSWER:
To create a text file that works as a URL shortcut on Ubuntu, you can follow these steps:

1. Open a text editor, such as `gedit` or `nano`, and create a new file. For example, you can name it `shortcut.txt`.
2. In the file, add the following text:
```
[Desktop Entry]
Version=1.0
Type=Application
Name=Shortcut
Exec=xdg-open <url>
Icon=<icon_file>
Terminal=false
```
Replace `<url>` with the URL you want to open when you double-click the file. For example:
```
[Desktop Entry]
Version=1.0
Type=Application
Name=Shortcut
Exec=xdg-open https://www.example.com
Icon=/path/to/icon.png
Terminal=false
```
Replace `<icon_file>` with the path to an icon file that you want to use for the shortcut. For example:
```
[Desktop Entry]
Version=1.0
Type=Application
Name=Shortcut
Exec=xdg-open https://www.example.com
Icon=/usr/share/icons/gnome/48x48/apps/firefox.png
Terminal=false
```
3. Save the file with a `.desktop` extension, for example, `shortcut.desktop`.
4. Move the file to a location on your desktop, such as `~/Desktop`.
5. Right-click on the file and select "Properties" or "Open With" and then "Properties" to set the file type to "Application" and the application to "xdg-open".
6. You can also set the file to be executable by running the command `chmod +x shortcut.desktop` in the terminal.

Now, when you double-click on the file, it should open the URL in your default internet browser.

Note: The `xdg-open` command is used to open the URL in the default browser. If you want to open the URL in a specific browser, you can replace `xdg-open` with the path to the browser executable. For example:
```
Exec=/usr/bin/firefox https://www.example.com
```
This will open the URL in Firefox instead of the default browser.

Replace `<icon_file>` with the path to an icon file that you want to use for the shortcut. For example:
```
[Desktop Entry]
Version=1.0
Type=Application
Name=Shortcut
Exec=xdg-open https://www.example.com
Icon=/usr/share/icons/gnome/48x48/apps/firefox.png
Terminal=false
```
