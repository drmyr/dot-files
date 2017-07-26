VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
	config.vm.box = "ubuntu/trusty64"

	config.vm.provider "virtualbox" do |vb|
		vb.name = "awsWholeSaleAPI"
		vb.memory = 1024
		vb.cpus = 1
	end

	config.ssh.forward_agent = true

	config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"

	config.vm.network "forwarded_port", guest: 5000, host: 5000
	config.vm.network "private_network", ip: "55.55.55.56"

	config.vm.synced_folder "~/.aws", "/home/vagrant/.aws" 

	config.vm.provision "shell", privileged: true, inline: <<-SHELL
		sudo apt-get update --fix-missing
		sudo apt-get -y -f install software-properties-common nginx python3-pip unzip tree build-essential libssl-dev nodejs npm
		sudo -H pip3 install --upgrade pip
		sudo npm install -g http-server
		sudo add-apt-repository ppa:openjdk-r/ppa
		sudo apt-get update --fix-missing
		sudo apt-get -y install openjdk-8-jdk
		sudo update-alternatives --config java
		sudo update-alternatives --config javac
	SHELL

	config.vm.provision "shell", privileged: false, inline: <<-SHELL
		pip3 install --upgrade --user awscli
		echo "export PATH=~/.local/bin:$PATH" >> .profile
		source .profile
		deployPackage=$(aws s3 ls s3://codepipeline-us-west-2-507573621714/Wholesale_DEV_Metada/MyAppBuild/ | sort -r | head -1 | awk '{print $4}')
		aws s3 cp s3://codepipeline-us-west-2-507573621714/Wholesale_DEV_Metada/MyAppBuild/$deployPackage /home/vagrant
		cd /home/vagrant
		unzip $deployPackage
	SHELL

	config.vm.provision "shell", privileged: false, run:"always", inline: <<-SHELL
		cd /home/vagrant
		jarFile="$(find . -maxdepth 1 -name "*.jar" | sed 's/..//')"
		serverConfigFile="$(find . -maxdepth 1 -name "*.yml" | sed 's/..//')"
		java -jar "$jarFile" server "$serverConfigFile"
	SHELL
end
