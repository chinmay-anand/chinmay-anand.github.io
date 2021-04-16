#### Hadoop - Spark - Hive installation

##### Installation Dependencies
* Spark depends on Hadoop & Scala.
* Hive depends on Hadoop, Derby and Cygwin
* Hadoop depends on Java and requires winutils.exe to run on windows
* Scala depends on Java
* *Apachwe Distriburaion directory for [all aplications](https://downloads.apache.org/)*

##### Hadoop installation
  * Download hadoop:
    * Google "hadoop download" or download the latest binary (e.g. hadoop-3.1.3.tar.gz) from [hadoop-release link](https://hadoop.apache.org/releases.html) at apache
  * Extract Hadoop as "D:\Programs\apache\hadoop-3.1.3"
  * Setup environment variables
    * Set "D:\Programs\apache\hadoop-3.1.3" as HADOOP_HOME.
    * Append "%HADOOP_HOME%\bin" to path.
  * Look for "winutils" or "hadooponwindows" at GitHub, download the zip and copy the binaries into hadoop\bin folderafter backing up the original hadoop folder.
    * winutils.exe is needed by hadoop to run on windows.
  * Refer Hadoop installation instructions below
    - from [Official Cluster Setup](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/ClusterSetup.html)
    - from [DataScienceCentral on windows](https://www.datasciencecentral.com/profiles/blogs/how-to-install-and-run-hadoop-on-windows-for-beginners)
    - from [Intellipaat](https://intellipaat.com/blog/tutorial/hadoop-tutorial/hadoop-installation/)
    - from [Guru99](https://www.guru99.com/how-to-install-hadoop.html)

##### Spark installation
  * Download Spark:
    * Google "spark download" or download the latest binary (e.g. spark-2.4.5-bin-hadoop2.7.tgz) from [apache-spark download link](https://spark.apache.org/downloads.html)
  * Extract Spark as "D:\Programs\apache\spark-2.4.5-bin-hadoop2.7"
  * Setup environment variables
    * Set SPARK_HOME = D:\Programs\apache\spark-2.4.5-bin-hadoop2.7
    * Append "%SPARK_HOME%\bin" to Path.
    * Append *%SPARK_HOME%\jars\* to CLASSPATH.
    * Set PYSPARK_DRIVER_PYTHON="jupyter"
    * Set PYSPARK_DRIVER_PYTHON_OPTS="notebook"
    * Set PYSPARK_PYTHON=python
    * Set PYTHONPATH=%SPARK_HOME%\python;%PYTHONPATH%

##### Kafka installation
  * Download kafka:
    * Google "kafka download" or download the latest binary (e.g. kafka_2.13-2.5.0) from [apache kafka download](https://kafka.apache.org/downloads) - depending on the scala version you use
  * Extract Kafka as "D:\Programs\apache\kafka_2.13-2.5.0"
  * Setup environment variables
    * Set "D:\Programs\apache\hadoop-3.1.3" as MY_KAFKA_HOME.
    * Append "%MY_KAFKA_HOME%\bin\windows" to path.

##### HIVE installation
  * Download hive:
    * Google "hive download" or download the latest binary (e.g. apache-hive-3.1.2-bin.tar.gz) from [apache hive download](https://downloads.apache.org/hive/)
  * Extract Hive as "D:\Programs\apache\hive-3.1.2"
  * Setup environment variables
    * Set "D:\Programs\apache\hive-3.1.2" as HIVE_HOME.
    * Append "%HIVE_HOME%\bin" to path.
  * Refer Hive installation instructions below
    - from [Kontext on Hive at windows](https://kontext.tech/column/hadoop/291/apache-hive-300-installation-on-windows-10-step-by-step-guide)
    - from [towardsdatascience on hive at win10](https://towardsdatascience.com/installing-apache-hive-3-1-2-on-windows-10-70669ce79c79)

##### Derby DB installation
  * Download derby:
    * Google "derby download" or download the latest binary (e.g. db-derby-10.14.2.0-bin.zip) from [apache derby download](https://db.apache.org/derby/derby_downloads.html)
  * Extract Hive as "D:\Programs\apache\db-derby-10.14.2.0"
  * Setup environment variables
    * Set "D:\Programs\apache\hive-3.1.2" as HIVE_HOME.
    * Append "%HIVE_HOME%\bin" to path.
