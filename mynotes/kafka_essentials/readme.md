#### Summary of Kafka Essentials

* Do not put "command" or "syntax" as part of a filename of a markdown md file, many firewalls such as BSNL block them leading to 404 error. E.g. the file "kafka_cli_help.cmd" gives 404 error in bsnl network but is rendered properly in airtel network.
* Do not put hiphens at the beginning of a markdown file. E.g putting a horizontal line by using '---' as the first lien of a markdownl file. The scripts that convert the md files into html get confused and dont refnder the file well. e.g. sero-md.js gets confused.
  * Use a header string at the top to avoid confusion. e.g. check the file "kafka_cli_help.cmd"
