### How to Expose a local web server (behind firwall) to external world:
* Solution: Using reverse proxy
* Below are few reverse proxies: (accounts with subscriptions)
  * **ngrok**
  * **loclx** (LocalXpose)
  * **pagekite** (1 month trial)
  * **localtunnel**
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
* SYNTAX for *pagekite*
  * loclx tunnel http --subdomain chinmay --to localhost:8081 --basic-auth "chinmay:anand"
    * The resulting url (e.g. https://chinmay.loclx.io) prompts for loginid/password when accessing we can use the values passed to "--basic-auth" parameter.
* SYNTAX for *localtunnel*
  * Download location: https://github.com/localtunnel/localtunnel
  * I could not make it run
