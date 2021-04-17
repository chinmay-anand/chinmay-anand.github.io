### How to Expose a local web server (behind firwall) to external world:
* Solution: Using reverse proxy
* [How to Expose a Local Development Server to the Internet](https://medium.com/botfuel/how-to-expose-a-local-development-server-to-the-internet-c31532d741cc) (medium.com)
* Below are few reverse proxies: (accounts with subscriptions)
  * **ngrok**
  * **localtunnel**
  * **loclx** (LocalXpose)
  * **pagekite** (1 month trial)
  * **serveo**
  * **sish**
  * **localserver.run**
  
* SYNTAX for *ngrok*
  * *ngrok http -auth="any_login:any_password" 8081*
    * This required me to create an account for "https://dashboard.ngrok.com/" and use the generated api key on my command prompt locally before running the command.
    * The resulting url (some random name) prompts for loginid/password when accessing we can use the values passed to "-auth" parameter.
    * Without "-auth" the url access is unprotected.
    * Documentation: https://ngrok.com/docs   https://dashboard.ngrok.com
    * ADV: The connection does not timeout.
    * DISADV: We get a random url like *"https://884aa211e48f.ngrok.io"* which changes everytime we restart ngrok.
    * To get a consistent domain we need to pay
* SYNTAX for *loclx*
  * *loclx tunnel http --subdomain chinmay --basic-auth "any_login:any_pass" --to localhost:8081*
  * *loclx tunnel http --subdomain chin-docs --basic-auth "any_login:any_pass" --fileserver E:\Documents*
    * The above two commands allow local server access and local file system access over http to outside world
    * The resulting url (e.g. https://chinmay.loclx.io) prompts for loginid/password when accessing we can use the values passed to "--basic-auth" parameter.
    * Without "--basic-auth" the url access is unprotected.
    * Documentation: https://docs.localxpose.io/
    * DISADV: The connection timesout every 15 minutes.
    * ADV: We get a fixed url like *"https://chinmay.loclx.io"* (depends on subdomain we pass.
* SYNTAX for *localtunnel*
  * Download location: https://github.com/localtunnel/localtunnel
  * I could not make it run

*
### Installation and Help

* NGROK:
>* SYNTAX:  "ngrok  --help"
>* INSTALLATION: Just extract the file "ngrok" from the downloaded zip
>* Refer:  https://ngrok.com/download
>* Very good but subdomain is randomly assigned and keeps changing with every restart for the free version.
>* "ngrok" -- can use free -- [Documentation](https://ngrok.com/docs) -- The paid version allows to use your own domain e.g. chinmay.ngrok.io

* LOCALTUNNEL:
>* SYNTAX:  "lt  --help"
>* INSTALLATION: "npm  install  -g  localtunnel"
>* Refer:  https://localtunnel.github.io/www/
>* Unreliable as there is no documentation. And sub-domain is not honoured after few uses.
>* "LocalTunnel" -- Free but difficult to run -- [Documentation](https://github.com/localtunnel/localtunnel) -- I could not make it up even after installing this nodejs package.

* LOCALXPOSE:
>* SYNTAX:  "loclx  --help"
>* "LocalXpose" -- can use free (15 min timeout) -- [Documentation](https://docs.localxpose.io/tutorials/) -- The paid version does not timeout.

* "pagekite" -- trial version -- expires after 30 days -- [Documentation](https://pagekite.net/support/quickstart/).
 
* SISH:
>* SYNTAX:  "docker run antoniomika/sish  --help"
>* INSTALLATION: docker pull antoniomika/sish:latest
>* Refer:  https://github.com/antoniomika/sish
>* I AM UNABLE TO MAKE IT RUN - it exits immediately after started.
>* Looks promising - I am still testing.

* SERVEO:
>* SYNTAX:  "???"
>* The official site is down, below is  a volunteer site.
>* Needs "GO" language to be installed.
>* Refer:  https://github.com/Axelen123/serveo

* LOCALSERVER.RUN:
>* Too COMPLEX to use
