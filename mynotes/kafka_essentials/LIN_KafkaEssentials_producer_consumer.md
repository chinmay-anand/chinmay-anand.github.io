Producers, are the applications those generate data and send it to your kafka cluster. Now when they publish this data, they use something called a partitioner.

### Producers
* The publish data to Topics.
* The use Partitioners.
  * **Partitioner**'s job
    1. figure out the current lead partition for the topic, the producer is writing toand, where (which broker) that data is then going to be written to.
    2. After the data gets written, and the partitioner has sent that back, partitioner finds out whether or not the message was received, and whether or not the data has been written successfully.
* Replications complete before read.
  * Typically the response comes back only after the data has been replicated. So that, if any issues arise, during the process of writing the new data, it will already have been replicated, and you won't lose anything.
* Focus on throughput.
  * Throughput considerations:
    * With bigger throughput kafka can handle bigger amounts of data and so the larger the system can scale.
    * If throughput is low, you may need to consider adding more nodes, and other things to scale your cluster beyond just the initial setup.

#### Producer Configuration settings:
1. Message Durability:
    * So for the configuration, the durability is a key thing to think about.
    * The message durability can set at the lead partition (depending on the throughput importance).
      * To **respond immediately**, that the message was received, or 
      * To **wait until** the message has been completely **replicated**.
2. Ordering / retries:
    * This is the number of retries that prevents or pauses the other writes before this one completes. This ensures the proper sequence or chronological order of the written data.
3. Batching and Compression (tuning parameters):
    * These tuning parameters can be used to maximize the throughput to enable the system to handle gigabytes or terabytes of real-time data.
    * By making message sizes smaller, in the batches as appropriate, you can optimize the throughput. Depending on the speed at which the messages are coming in, you can really optimize your throughput.
4. Queing Limit:
    * "buffer.memory" config item allows us to set up the total memory to make available to the Java client. And this is the client that is collecting unsent messages. This is important, again, because if you were to overrun this buffer, and run out of memory, you could have some serious issues in your cluster, and data loss, and all kinds of bad things could happen.

#### Producer Example (API):
* Run the "kafka-console-producer" in the terminal with broker-list and topic as parameters and enter some messages.
* ```kafka-console-producer   --broker-list  localhost:9092   --topic  test```
* Then on the console we will be allowed to write some messages in the same producer console to write the messages to kafka cluster.
* Alternately we can start the producer and write messages from a java or python applications as well.

### Consumers
* Consumers are little more complicated than producers.
* Consumers *read data from Topics*.
* Consumers are *organized into groups*.
  * All the partitions of a topic are divided among all the consumers of the consumer group. So if there are 30 partitions and 30 consumers in th egroup, then each consumer will have their own partition assigned to them.
* Consumers are *Rebalanced*
  * As consumers come and go from the consumer group, the consumer group needs to be rebalanced by **zookeeper**. And in newer version of Kafka, it is **Broker corodinator**.
* Zookeeper or Broker-coordinator (in newer kafka)
  * These are a different part of the kafka system that monitors the consumer group to ensure that they are not overloaded and partitions are assigned appropriately.

#### Consumer Configuration settings:
* Group Id:
  * This is the name or identifier of the consumer group.
* Session Timeout (default 30 sec)
  * We can increase it to avoid frequent rebalancing creating too much overhead.
* Heartbeat
  * Heartbeats are setup to keep the zookeeper or broker-coordinator know that the consumer is still alive.
  * If heartbeats stop, i.e. the consumer is gone, then consumer group is rebalanced and the partition is reassigned to bring harmony in the kafka cluster.
  * Heartbeat can be adjusted using a "interval configuration".
  * Kafka tries to reduce the overload (and resulting slowness) using the heatbeat
* Autocommit (default 5 sec)
  * The offset position or index of the consumer is stored every 5 seconds to ensure that if a consumer goes down and data still is being written by producers, kafka know where the consumer went down and once up it starts reading form that offset.
  
#### Consumer Example
* Run the "kafka-console-consumer" in the terminal with "bootstrap-server" (the server or broker to read from), "topic" and reading position such as "from-beginning" or from a "offset" as parameters. This prints the messages written to the topic starting from the specified offset position.
* ```kafka-console-consimer   --bootstratp-server  localhost:9092   --topic  test   --from-beginning```
