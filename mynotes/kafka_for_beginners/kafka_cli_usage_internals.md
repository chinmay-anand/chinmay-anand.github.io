#### Broker(s): 
* Zookeeper and kafka (aka kafka broker or kafka server) must be started before working with Topics, Producers and Consumers. 
* how to start zookeeper and kafka 
  * create two folders for zookeeper logs and kafka logs respectively. 
  * modify zookeeper properties to update dataDir 
  * modify server properties to update log.dirs 
  * in both the cases the above use forward slashes instead of usual reverse slash 
* In two different console windows start zookeeper(zookeeper-server-start.bat) and broker (kafka-server-start.bat) respectively using their properties files as parameters. Use "--help" for the files to get the syntax help or check my github pages documentation. 
* zookeeper must be running before kafka broker as broker zookeeper details.
* We can start multiple brokers (aka servers) using multiple server.properties (duplicated with distinct values in at least 3 different parameters `broker.id`, `listeners` and `log.dirs`).

#### Topic: 
* To create a topic we need topic name, number of partitions to be created and replication factor that applies to each partition. 
  * `kafka-topics.bat  --zookeeper localhost:2181  --create  --partitions 1  --replication-factor 1` 
  * The "partitions" represent the number of partitions being created for the topic. 
    * The partitions are first created on different brokers if available before attempting on the same broker. 
    * We can create as many partitions as we want. Partitions aid in parallelism.
  * The "replication-factor" represents number of replicas to be created for each partition. 
    * The replicas are never created more than once on a broker. 
    * So replication factor can never exceed broker count.
* To list the available topics:
  * `kafka-topics.bat --zookeeper localhost:2181 --list`
* To get more information on a specific topic:
  * `kafka-topics.bat --zookeeper localhost:2181 --topic my_topic --describe
    * This gives topic name, partition id , leader broker id, replicas server id list, and Isr (in-sync-replica) server id list.
    * For each partion one line is displayed with following details:
      * "Topic" name, PartitionCount and "Partition" id, "Leader" broker, "Replicas"  the list of replica ids, and "Isr" the list of ids which are in sync with the leader.
* To delete a topic in kafka use: 
  * `kafka-topics.bat --zookeeper localhost:2181 --topic mytopic --delete` 
  * The above command will delete the topic only if the flag "delete.topic.enable" is set to true, else the topic is just marked for deletion, but not deleted physically.
  
#### Producer:
To produce message to a topic using console command:
* Mandatory parameters for producer and consumer are "broker-list" and "topic". 
* They use "broker-list" instead of zookeeper and parameter to the broker list is usually one of the brokers but connection automatically happens to all the brokers in the cluster.
* Syntax to send message through console producer:
  * `kafka-console-producer.bat --broker-list localhost:9092 --topic mytopic` 
  * `kafka-console-producer.bat --broker-list localhost:9092 --topic mytopic --producer-property acks=all`
  * The `--producer-property` is the way to pass parameters to the kafka producer.
* If we try to produce a message to a non-existent topic, then that topic gets created with the default parameters (picked from server.properties)
  * `offsets.topic.replication.factor` decides the replication factor for the auto-created topics.
  * `num.partitions` decides the number of partitions in the auto-created topic.
    * If you want these auto-created topics to be created with 3 partitions then you may need to set "num.partitions" parameter to 3 in server.properties file.
  * Initially a WARNing message appears that "leader not available..." but it waits for some time and then assigns a leader after auto-creating the topic.
* "Best Practice" is to create topics explicitly without depending on default properties, which may be insufficient for our purpose.

#### Consumer:
* To consume messages from a topic using console command:
  * Mandatory parameters are `broker-list` and `topic`
  * Offset position can be supplied to read data from a specific position in topic.
    * "`--from-beginning`" reads messages from beginning of the topic
    * "`--offset n`" reads messages from nth index in the topic
    * no parameter --> If no position is specified consumer reads messages from current time onwards.
  * `kafka-console-consumer.bat --broker-list localhost:9092 --topic mytopic`

#### Consumer Groups:
* Consumer groups are specified using `--group myconsumergroup`
  * `kafka-console-consumer.bat --broker-list localhost:9092 --topic mytopic  --group myappgroup`
  * If a produceer wrtites few messages to this topic, then each consumer from the group will get messages in turns and so on.
    * Some messages will be picked by 1st consumer, some by 2nd, some msgs will be read by 3rd consumer, again some by 1st consumer and so on.
  * If a consumer form a group goes down the remaining consumers will pick the messages without loosing anything.
  * If a new consumer joins a group then the new one starts sharing the load along with the already running consumers.
