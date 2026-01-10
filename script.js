// For index.html: Handle See More buttons
document.addEventListener('DOMContentLoaded', function() {
    const seeMoreButtons = document.querySelectorAll('.see-more');
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const software = this.getAttribute('data-software');
            window.location.href = `detail.html?software=${software}`;
        });
    });
});

// For detail.html: Populate content based on URL
if (window.location.pathname.includes('detail.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const software = urlParams.get('software');
    
    // Software data: Replace with real descriptions, steps, and image URLs
    const softwareData = {
        photoshop: {
            title: 'Photoshop',
            description: 'Adobe Photoshop is a powerful image editing software used for photo manipulation, graphic design, and digital art. It offers tools for retouching, compositing, and creating stunning visuals.',
            steps: [
                'Download the setup file from the link below.',
                'Extract the ZIP file using WinRAR or 7-Zip.',
                'Open the extracted folder and double-click on the Setup.exe file.',
                'Follow the on-screen instructions to complete the installation.',
                'Once installed, launch Adobe Photoshop from your desktop or Start Menu.'
            ],
            images: ['images/photoshop-step1.jpg', 'images/photoshop-step2.jpg'],  // Add your images here
            downloadLink: 'https://www.adobe.com/products/photoshop/free-trial-download.html'
        },
        illustrator: {
            title: 'Illustrator',
            description: 'Adobe Illustrator is a vector graphics editor for creating logos, illustrations, and scalable designs. It\'s ideal for print and digital media.',
            steps: [
                'Download the setup file from the link below.',
                'Extract the ZIP file using WinRAR or 7-Zip.',
                'Open the extracted folder and double-click on the Setup.exe file.',
                'Follow the on-screen instructions to complete the installation.',
                'Once installed, launch Adobe Illustrator from your desktop or Start Menu.'
            ],
            images: ['images/illustrator-step1.jpg', 'images/illustrator-step2.jpg'],
            downloadLink: 'https://www.adobe.com/products/illustrator/free-trial-download.html'
        },
        xampp: {
            title: 'Xampp',
            description: 'XAMPP is a free, open-source cross-platform web server solution stack package, consisting mainly of the Apache HTTP Server, MariaDB database, and interpreters for scripts written in PHP and Perl.',
            steps: [
                'Click on the “Download Now” button below to get the XAMPP setup.',
                'Choose an installation directory (default is C:xampp) and click Next.',
                'Start Apache and MySQL modules to begin using your local server.',
                'Open your browser and go to http://localhost/ to check if its running properly.'
            ],
            images: ['images/xampp-step1.jpg', 'images/xampp-step2.jpg'],
            downloadLink: 'https://www.apachefriends.org/download.html'
        },
        sqlserver: {
            title: 'SQL Server',
            description: 'Microsoft SQL Server is a relational database management system developed by Microsoft. It\'s used for storing and retrieving data as requested by other software applications.',
            steps: [
                'Click on the “Download Now” button below to get the SQL Server setup.',
                'Run the installer and choose Custom installation for download the sql server iso file.',
                'Once the iso file is downloaded open the iso file and open the setup file',
                'Once the setup is open follow the instruction given in the images bellow',
                'After the complete installation you need to installed the SQL Server management studio (SSMS) to connect the database.',
                'Click the ssms.exe file and simply installed the SSMS and once the installation complete open the ssms and connect your database'

            ],
            images: ['images/sqlserver-step1.jpg', 'images/sqlserver-step2.jpg'],
            downloadLink: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads'
        },
        git: {
            title: 'Git',
            description: 'Git is a distributed version control system for tracking changes in source code during software development. It allows multiple developers to work on a project simultaneously.',
            steps: [
                'Click the download button below to get the Git for windows or if you are using MAC/Linux OS visit Git official website to download the setup.',
                'After downloading, double click on setup to install the Git',
                'Click next and and select the location you want to install. (Recommended: C:\Program Files)',
                'Click next until install button, click on the install button and your installation will start.'
            ],
            images: ['images/git-step1.jpg', 'images/git-step2.jpg'],
            downloadLink: 'https://git-scm.com/downloads'
        },
        nodejs: {
            title: 'Node.js',
            description: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It\'s used for server-side scripting.',
            steps: [
                'Click the download button below to get the Node JS setup file.',
                'Open the download file, and keep the default setting and click next until installation starts.',
                'Check the box “Automatically install necessary tools” if prompted.',
                'To verify the node js installation, open command prompt and type “node -v”. This will shows the node js version. You can also check the npm (Node Package Manager) version by typing in command prompt “npm -v”.',
                'Node.js is now installed. You can create and run JavaScript files or start building web servers using frameworks like Express.js.'
            ],
            images: ['images/nodejs-step1.jpg', 'images/nodejs-step2.jpg'],
            downloadLink: 'https://nodejs.org/en/download/'
        },
        vscode: {
            title: 'Visual Studio Code',
            description: 'Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux, and macOS. It includes support for debugging, syntax highlighting, and version control.',
            steps: [
                'Step 1: Download the Visual Studio Code setup file from the link below',
                'Accept the license agreement and select the installation path.',
                'Check the boxes for adding VS Code to your system path (recommended).',
                'Click Install, wait for the process to complete, and then launch VS Code.',
                'Install extensions from the Extensions Marketplace (like Python, React, or Prettier) to enhance your workflow.'
            ],
            images: ['images/vscode-step1.jpg', 'images/vscode-step2.jpg'],
            downloadLink: 'https://code.visualstudio.com/download'
        },
        visualstudio: {
            title: 'Microsoft Visual Studio',
            description: 'Microsoft Visual Studio is an integrated development environment (IDE) from Microsoft. It is used to develop computer programs, as well as websites, web apps, web services, and mobile apps.',
            steps: [
                'Click the download button below to get the Visual Studio Installer',
                'Run the installer — it will show a list of workloads like “ASP.NET development”, “Desktop development with C++”, etc.',
                'Select the workloads you need (for example: .NET desktop development).',
                'Click Install and wait for the setup to download and configure the components.',
                'Once installed, open Visual Studio and sign in with your Microsoft account.(Optional)',
                'Start creating a new project and choose a programming language or template.'
            ],
            images: ['images/visualstudio-step1.jpg', 'images/visualstudio-step2.jpg'],
            downloadLink: 'https://visualstudio.microsoft.com/downloads/'
        },
        office: {
            title: 'Microsoft Office Setup',
            description: 'Microsoft Office is a suite of productivity software including Word, Excel, PowerPoint, and more. It\'s essential for document creation, data analysis, and presentations.',
            steps: [
                'Click the download button below to get the Microsoft Office 2021',
                'Double click the setup and your installation starts',
                'Once the installation is complete, activate your office using Windows Powershell.',
                'Open the Windows Powershell and type this command (irm https://get.activated.win | iex) and press enter, wait for some moment another window will appear',
                'Once the window will apear use press 2 and then 1, your office activation will be started. Once it will complete close all the tabs and open the word, excel or powerpoint, your office will be activated.'
            ],
            images: ['images/office-step1.jpg', 'images/office-step2.jpg'],
            downloadLink: 'https://www.microsoft.com/en-us/microsoft-365/download-office'
        },
        winrar: {
            title: 'Winrar',
            description: 'WinRAR is a powerful archive manager. It can backup your data and reduce the size of email attachments, decompress RAR, ZIP, and other files downloaded from the Internet.',
            steps: [
                'Click the download button below to get the Winrar setup',
                'Double click to the setuo to start the installation',
                'Once the installation will be complete click the finished/OK button, Now you can compress your files and extrat also.',
                'Use advanced options for encryption if needed.'
            ],
            images: ['images/winrar-step1.jpg', 'images/winrar-step2.jpg'],
            downloadLink: 'https://www.win-rar.com/download.html'
        },
        chrome: {
            title: 'Google Chrome',
            description: 'Google Chrome is a cross-platform web browser developed by Google. It\'s known for its speed, security, and integration with Google services.',
            steps: [
                'Click the download button below to get the chrome setup',
                'Double click the setup and wait for the installation will start automatically (Internet Required)',
                'Set as default browser and start browsing.'
            ],
            images: ['images/chrome-step1.jpg', 'images/chrome-step2.jpg'],
            downloadLink: 'https://www.google.com/chrome/'
        },
        flutter: {
            title: 'Flutter',
            description: 'Flutter is Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.',
            steps: [
                'Click the download button below to get the flutter sdk, once the sdk download extract the sdk and placed the folder in C:// directory.',
                'Open your environment variable.',
                'Open the flutter folder you extracted then open bin folder and copy the bin folder path and paste into the environment variable`s path.',
                'Also check you have a git download in your system and same paste the bin and cmd folder path in your environment path.'
            ],
            images: ['images/flutter-step1.jpg', 'images/flutter-step2.jpg'],
            downloadLink: 'https://flutter.dev/docs/get-started/install'
        },
        windows11: {
            title: 'Windows 11 ISO',
            description: 'Windows 11 is Microsoft\'s latest operating system, featuring a redesigned interface, improved performance, and new features like widgets and better multitasking.',
            steps: [
                'Click the download button below to get the windows 11 ISO file.',
                'Download the rufus and then open rufus.',
                'Insert the usb, rufus will detect usb the automatically, then click the select button and select the iso file, if your system is old click the GPT and select the MBR but if your system is new you can leave at GPT.',
                'Click the start button and your bootable usb will start.'
            ],
            images: ['images/windows11-step1.jpg', 'images/windows11-step2.jpg'],
            downloadLink: 'https://www.microsoft.com/en-us/software-download/windows11'
        },
        windows10: {
            title: 'Windows 10 ISO',
            description: 'Windows 10 is a widely used operating system by Microsoft, offering a familiar interface, security updates, and compatibility with a vast range of software.',
            steps: [
                'Click the download button below to get the windows 10 ISO file.',
                'Download the rufus and then open rufus.',
                'Insert the usb, rufus will detect usb the automatically, then click the select button and select the iso file, if your system is old click the GPT and select the MBR but if your system is new you can leave at GPT.',
                'Click the start button and your bootable usb will start.'
            ],
            images: ['images/windows10-step1.jpg', 'images/windows10-step2.jpg'],
            downloadLink: 'https://www.microsoft.com/en-us/software-download/windows10ISO'
        },
        virtualbox: {
            title: 'Virtual Box',
            description: 'Oracle VM VirtualBox is a free and open-source hosted hypervisor for x86 virtualization, developed by Oracle Corporation. It allows users to run multiple operating systems on a single machine.',
            steps: [
                'Click the download button below to get VIrutal Box Setup',
                'Double click to the setup file and simply click next until Virtual box installation start.',
                'Once the Virtual Box installed, open Virtual Box and Create a new virtual machine.',
                'Install an OS inside the VM.'
            ],
            images: ['images/virtualbox-step1.jpg', 'images/virtualbox-step2.jpg'],
            downloadLink: 'https://www.virtualbox.org/wiki/Downloads'
        },
        kali: {
            title: 'Kali Linux Setup',
            description: 'Kali Linux is a Debian-based Linux distribution aimed at advanced Penetration Testing and Security Auditing. It comes with hundreds of tools pre-installed.',
            steps: [
                'Click the download button below to get the Kali linux ISO.',
                'Create a bootable USB.',
                'Boot and install Kali Linux.',
                'Update the system and start using tools.'
            ],
            images: ['images/kali-step1.jpg', 'images/kali-step2.jpg'],
            downloadLink: 'https://www.kali.org/downloads/'
        }
    };
    
    if (softwareData[software]) {
        // Populate title and description
        document.getElementById('software-title').textContent = softwareData[software].title;
        document.getElementById('software-description').textContent = softwareData[software].description;
        
        // Populate steps
        const stepsList = document.getElementById('software-steps');
        stepsList.innerHTML = '';
        softwareData[software].steps.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            stepsList.appendChild(li);
        });
        
        // Populate images
        const imagesContainer = document.getElementById('software-images');
        imagesContainer.innerHTML = '';
        softwareData[software].images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `${softwareData[software].title} step image`;
            imagesContainer.appendChild(img);
        });
        
        // Download button
        document.getElementById('download-btn').addEventListener('click', function() {
            window.location.href = softwareData[software].downloadLink;
        });
    } else {
        // Fallback if software not found
        document.getElementById('software-title').textContent = 'Software Not Found';
        document.getElementById('software-description').textContent = 'Sorry, details for this software are not available.';
        document.getElementById('software-steps').innerHTML = '';
        document.getElementById('software-images').innerHTML = '';
        document.getElementById('download-btn').style.display = 'none';
    }
}