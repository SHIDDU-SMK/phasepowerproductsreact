const SmartMonitor = {
    'Title': 'Smart Monitor',
    'Products': [{
            "id": 1,
            "heading": "Transducer & Isolator",
            "top_desc": " Measure, record and visualize electrical network parameters ",
            "image": '../images/transducer.png',
            "bottom_desc": " Isolation Interface | Signal Changeover | Power Transducer | Voltage Transducer",
            "features_heading": "Salient Features",
            "salient_features": [
                "Measured parameters can be programmed to generate equivalent output signals ",
                "Override selection for desired value and range",
                "Isolation between input to output or output to output",
                "Quick response time of 300ms in display and communication",
                " On field configurable Input and Output parameters",
                "User friendly interface to support remote monitoring and communication",
            ],
            "app_heading": "Applications",
            "app_list": ["Easy to install and is field configurable by the user ",
                " Output signal is transferable over a long range",
                "  Textile and manufacturing industry",
                " Process Manufacturing/OEM’s",
            ]
        },
        {
            "id": 2,
            "heading": "Digital Panel Meter",
            "top_desc": "Basic parameters measured precisely",
            "image": '../images/digitalpanel.png',
            "bottom_desc": " Ammeter | Volt meter | VAF Meter | Hz Meter | Frequency MeterDC Meter | RPM & MPM | Transducer Output ",
            "features_heading": "Salient Features",
            "salient_features": [
                "Inbuilt Selector Switch",
                "High resolution reading with autoscaling",
                "Suitable for industrial panels, gen-sets, solar, pump control panels, etc.",
                "Optional RS485 for data collection",
                "  Optional easy interface to PLC through modbus protocol ",
            ],
            "app_heading": "Applications",
            "app_list": [
                "AC & DC Measurement ",
                " Equipment Monitoring",
                "  Genset, Solar and UPS applications",
                " In control panel to measure different electrical loads"
            ],
        },
        {
            "id": 3,
            "heading": " Multifunction Meter",
            "top_desc": "Simultaneous measurement of various electrical parameters",
            "image": '../images/multifunctionmeter.png',
            "bottom_desc": " Basic | Power | Energy | Load Manager Digital Output | Pulse Output ",
            "features_heading": "Salient Features",
            "salient_features": [
                "Easy navigation",
                "Event recording with time stamp (all basic & power parameters)",
                "Unbalance load and voltage with calculated neutral current.",
                "Dynamic communication",
                "  Optional digital output for all basic and power parameters ",
            ],
            "app_heading": "Applications",
            "app_list": [
                "Monitoring Electrical Parameters ",
                "Control / protection",
                "  In control panel to measure different electrical loads",
                " Generator & control panels",
            ]
        },
        {
            "id": 4,
            "heading": " Branch Circuit Monitor",
            "top_desc": "Compact device to enroute multiple channels",
            "image": '../images/branchcircuitmonitor.png',
            "bottom_desc": " Multi-channel load manager | Power distribution unit ",
            "prod_id": "branchcircuitmonitor",
            "features_heading": "Salient Features",
            "salient_features": [
                "Multiple branches of load can be monitored together",
                " Faster communication through RS485 port (Modbus protocol)d",
                "Accuracy Class 1.0 as per IEC 62053-21 & Class 0.5 as per IEC 62053-22 Standards",
                "Displays more than 25 parameters",
            ],
            "app_heading": "Applications",
            "app_list": [
                "Remote reading and control",
                "Building management system",
                " In control panel to measure different electrical loads",
                "  Ideal for billing in apartments/commercial complexes",
            ]
        },
        {
            "id": 5,
            "heading": " Generator Monitoring Unit",
            "top_desc": "Generator monitoring device with dual display",
            "image": '../images/generatormonitoringunit.png',
            "bottom_desc": " Counter & LED Display | Pulse Output ",
            "prod_id": "generalmoitoringunit",
            "features_heading": "Salient Features",
            "salient_features": [
                "Avoids the requirement of 2 different meters (energy and VAF in one)",
                " Reduces the cost and simplify wiring",
                "High resolution reading with auto scaling in LED",
                "Energy consumption in counter even if CT is reversed",
            ],
            "app_heading": "Applications",
            "app_list": [
                " Easy configuration of Gen-set Controllers",
                "Monitor health & Readiness",
                " Remote operation & control",
                "  Multiple alarms & notifications"
            ]
        },
        {
            "id": 6,
            "heading": " Dual Source Energy Meter",
            "top_desc": "Collecting data from two different sources of energy",
            "image": '../images/dualsourceenergymeter.png',
            "bottom_desc": " Multifunction meter | Dual source measurement ",
            "prod_id": "dualsource",
            "features_heading": "Salient Features",
            "salient_features": ["Directly replaces 2 energy meters",
                " Sensing dual source through 240V connection",
                "Dual row display switches based on the source",
                "Optional digital output separately for EB or DG parameters",
            ],
            "app_heading": "Applications",
            "app_list": [
                " To measure dual power source",
                "Dual source energy billing",
                "  Industries, residential, commercial buildings",
                "  Generator & control panels",
            ]
        },
        {
            "id": 7,
            "heading": "DC Energy Meter",
            "top_desc": "Smart device for all renewal energy resources",
            "image": '../images/dcenergymeter.png',
            "bottom_desc": " Multi-channel DC Energy | Voltage/Current full scale ",
            "prod_id": "dcenergy",
            "features_heading": "Salient Features",
            "salient_features": [
                "Multiple channels can be measured by a single meter, EN2450N & EN2450D",
                " Differential current input for all the current channels ",
                "Programmable shunt secondary 50mV to 100mV",
                " Programmable CT Primary for all channels up to 200A - for Hall Effect CT",
                " Data logging for parameters such as Energy, Load hours and Ampere hours",
                " Easy installation,Compact size, weight and simple wiring",
            ],
            "app_heading": "Applications",
            "app_list": [
                "DC Measurement",
                "Equipment Monitoring",
                "  Genset, Solar and UPS applications",
                " In control panel to measure different electrical loads "
            ]
        }
    ]
};

const SmartControl = {
    'Title': 'Smart Controller',
    'Products': [{
            "id": 1,
            "heading": "Power Quality Meter",
            "top_desc": " Measure, record and visualize electrical network parameters ",
            "image": '../images/powerqualitymeter.png',
            "bottom_desc": " Multifunction Meter | Power quality | Load Manager | Demand controller | Power quality | Harmonics ",
            "features_heading": "Salient Features",
            "salient_features": [
                "Power quality meter displays waveform for instantaneous V,I, harmonics,Sag/Swell with data storage upto 14GB",
                "Measurement of THD and harmonics up to 63 rd order is possible with power quality meter",
                "Captures and measures power quality events: flicker, K factor, crest factor,sag/swell, interruption & unbalance",
                "TOD option for energy & demand upto 8 slots",
                "Power quality meter monitors performance & availability of devices using inbuilt MQTT & TCP/IP protocol",
                "Power quality meter is an ideal choice for remote monitoring of devices via M2M software platform",
            ],
            "app_heading": "Applications",
            "app_list": ["Monitoring critical load,incomers, and HT panels ",
                " Utility billing in Apartments and commercial complexes",
                " Measuring energy variants in Building Management system",
                " Measuring power & energy variants in Gensets, Test benches, and the laboratories",
            ]
        },
        {
            "id": 2,
            "heading": "Digital Panel Meter",
            "top_desc": "Basic parameters measured precisely",
            "image": '../images/digitalpanel.png',
            "bottom_desc": " Ammeter | Volt meter | VAF Meter | Hz Meter | Frequency MeterDC Meter | RPM & MPM | Transducer Output ",
            "prod_id": "digitalpanelmeter",
            "features_heading": "Salient Features",
            "salient_features": [
                "Inbuilt Selector Switch",
                "High resolution reading with autoscaling",
                "Suitable for industrial panels, gen-sets, solar, pump control panels, etc.",
                "Optional RS485 for data collection",
                "  Optional easy interface to PLC through modbus protocol ",
            ],
            "app_heading": "Applications",
            "app_list": [
                "AC & DC Measurement ",
                " Equipment Monitoring",
                "  Genset, Solar and UPS applications",
                " In control panel to measure different electrical loads"
            ],
        },
        {
            "id": 3,
            "heading": " Multifunction Meter",
            "top_desc": "Simultaneous measurement of various electrical parameters",
            "image": '../images/multifunctionmeter.png',
            "bottom_desc": " Basic | Power | Energy | Load Manager Digital Output | Pulse Output ",
            "prod_id": "multifunction",
            "features_heading": "Salient Features",
            "salient_features": [
                "Easy navigation",
                "Event recording with time stamp (all basic & power parameters)",
                "Unbalance load and voltage with calculated neutral current.",
                "Dynamic communication",
                "  Optional digital output for all basic and power parameters ",
            ],
            "app_heading": "Applications",
            "app_list": [
                "Monitoring Electrical Parameters ",
                "Control / protection",
                "  In control panel to measure different electrical loads",
                " Generator & control panels",
            ]
        },
        {
            "id": 4,
            "heading": " Branch Circuit Monitor",
            "top_desc": "Compact device to enroute multiple channels",
            "image": '../images/branchcircuitmonitor.png',
            "bottom_desc": " Multi-channel load manager | Power distribution unit ",
            "prod_id": "branchcircuitmonitor",
            "features_heading": "Salient Features",
            "salient_features": [
                "Multiple branches of load can be monitored together",
                " Faster communication through RS485 port (Modbus protocol)d",
                "Accuracy Class 1.0 as per IEC 62053-21 & Class 0.5 as per IEC 62053-22 Standards",
                "Displays more than 25 parameters",
            ],
            "app_heading": "Applications",
            "app_list": [
                "Remote reading and control",
                "Building management system",
                " In control panel to measure different electrical loads",
                "  Ideal for billing in apartments/commercial complexes",
            ]
        },
        {
            "id": 5,
            "heading": " Generator Monitoring Unit",
            "top_desc": "Generator monitoring device with dual display",
            "image": '../images/generatormonitoringunit.png',
            "bottom_desc": " Counter & LED Display | Pulse Output ",
            "prod_id": "generalmoitoringunit",
            "features_heading": "Salient Features",
            "salient_features": [
                "Avoids the requirement of 2 different meters (energy and VAF in one)",
                " Reduces the cost and simplify wiring",
                "High resolution reading with auto scaling in LED",
                "Energy consumption in counter even if CT is reversed",
            ],
            "app_heading": "Applications",
            "app_list": [
                " Easy configuration of Gen-set Controllers",
                "Monitor health & Readiness",
                " Remote operation & control",
                "  Multiple alarms & notifications"
            ]
        },
        {
            "id": 6,
            "heading": " Dual Source Energy Meter",
            "top_desc": "Collecting data from two different sources of energy",
            "image": '../images/dualsourceenergymeter.png',
            "bottom_desc": " Multifunction meter | Dual source measurement ",
            "prod_id": "dualsource",
            "features_heading": "Salient Features",
            "salient_features": ["Directly replaces 2 energy meters",
                " Sensing dual source through 240V connection",
                "Dual row display switches based on the source",
                "Optional digital output separately for EB or DG parameters",
            ],
            "app_heading": "Applications",
            "app_list": [
                " To measure dual power source",
                "Dual source energy billing",
                "  Industries, residential, commercial buildings",
                "  Generator & control panels",
            ]
        },
        {
            "id": 7,
            "heading": "DC Energy Meter",
            "top_desc": "Smart device for all renewal energy resources",
            "image": '../images/dcenergymeter.png',
            "bottom_desc": " Multi-channel DC Energy | Voltage/Current full scale ",
            "prod_id": "dcenergy",
            "features_heading": "Salient Features",
            "salient_features": [
                "Multiple channels can be measured by a single meter, EN2450N & EN2450D",
                " Differential current input for all the current channels ",
                "Programmable shunt secondary 50mV to 100mV",
                " Programmable CT Primary for all channels up to 200A - for Hall Effect CT",
                " Data logging for parameters such as Energy, Load hours and Ampere hours",
                " Easy installation,Compact size, weight and simple wiring",
            ],
            "app_heading": "Applications",
            "app_list": [
                "DC Measurement",
                "Equipment Monitoring",
                "  Genset, Solar and UPS applications",
                " In control panel to measure different electrical loads "
            ]
        }
    ]
};

const SmartResource = {
    'Title': 'Smart Resources',
    'Products': [{
            "id": 1,
            "heading": "Automatic Transfer Switch",
            "top_desc": "Seamless switching between sources for uninterrupted supply.",
            "image": '../images/automatictransferswitch.png',
            "bottom_desc": " Overload Tripping Logic | Automatic DG Start/Stop | Fire/External Fault Trip | Safe and Rapid Switching | Automatic Transfer",
            "prod_id": "automatictransferswitch",
            "features_heading": "Salient Features",
            "salient_features": [
                "Automatic start/stop operation of DG on mains failure Overload tripping (optional) with inverse curve logic",
                "Automatic transfer switch are provided with fire alarm / external fault trip feature",
                "Inbuilt control switch for selecting auto/manual mode",
                "Automatic transfer switch have high capacity to withstand short circuit",
                "Optional RS485 communication and cloud",
            ],
            "app_heading": "Applications",
            "app_list": ["Monitor real-time system voltage and frequency ",
                " Monitor source healthiness and output for both Source",
                " Wide range of motor operating voltage from 150VAC – 285V AC",
                " Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.",
            ]
        },
        {
            "id": 2,
            "heading": "Manual Transfer Switch",
            "top_desc": "MANUALLY CONTROL YOUR POWER SOURCE",
            "image": '../images/manualtransferswitch.png',
            "bottom_desc": " User-friendly Installation | Safe Changeover",
            "prod_id": "manualtransfermeter",
            "features_heading": "Salient Features",
            "salient_features": [
                "High short-circuit withstand capacity",
                "Quick-make & quick-break operation for transferring of loads",
                "Operating handle with provision to lock in ON/OFF position",
                "Safest changeover during the failure of a primary source",
                " Facilitate easy installation and simplified wiring connections",
            ],
            "app_heading": "Applications",
            "app_list": [
                "Generator OEM’s ",
                "Commercial buildings",
                "Automobile Industry & Manufacturing Industry",
                "Power distribution and Load Management."
            ],
        },
        {
            "id": 3,
            "heading": "Prepaid/Postpaid Meter",
            "top_desc": "Prepaid meter is a Single Device for electricity, gas and water measurement. Prepaid meter",
            "image": '../images/prepaidpostpaidmeter.png',
            "bottom_desc": " Multifunction | Dual source | Over voltage/current cut off for protection | Post paid meter | Prepaid meter ",
            "prod_id": "prepaidpostmeter",
            "features_heading": "Salient Features",
            "salient_features": [
                "User friendly contactless prepaid metering solution",
                "Prepaid meter with LoRa helps you to make private network being independent of service provider",
                "Integration of Gas & Water with the electrical parameters thereby, extending the flexibility for the user to budget expenses",
                "Tripping of EB or DG consumption at pre-determined set point for protection & effective use of energy",
                "Recharge your prepaid meter & have explicit view of energy usage & tariff rates from anywhere",
            ],
            "app_heading": "Applications",
            "app_list": [
                "Shopping complex",
                "Residential layouts / apartments",
                "A Automate power distribution, protect expensive equipment and prevent fatal risks",
                "ACCL Logic for Currents up to 120 Amps is available.",
            ]
        },
        {
            "id": 4,
            "heading": " Power Analyzer",
            "top_desc": "High profile power analyzer with higher accuracy and data logging",
            "image": '../images/poweranalyzer.png',
            "bottom_desc": "Handheld Power Quality Analyzer | Power Analyzer | Harmonic Analyzer ",
            "prod_id": "poweranalyzer",
            "features_heading": "Salient Features",
            "salient_features": [
                "Helps you locate, predict, prevent & troubleshoot problems in power distribution",
                "Measures voltage, current, frequency, power, energy consumption, unbalance, harmonics & inter-harmonics",
                "24x7 cloud server data logging with time stamp",
                "Monitor & control large campuses or remote facilities with inexpensive web technology.",
                "Perform audits & analyzes remotely.",
            ],
            "app_heading": "Applications",
            "app_list": [
                "Reduce energy costs & Acheive maximum Returns on Investment.",
                "Higher Performance, easy to configure but economically priced",
                "Supports various Protocols, Identifies & Eliminates energy waste.",
                "Security & System Integration, improves Working envronment.",
            ]
        },
        {
            "id": 5,
            "heading": " ACCL",
            "top_desc": "Accl (Automatic Source Changeover with Current Limiter) For a seamless, uninterrupted changeover between power sources. Accl Changeover Switch manufacturers in India",
            "image": '../images/accl.png',
            "bottom_desc": "ACCL | Automatic Changeover Current Limiter | Frequency | Energy",
            "prod_id": "accl",
            "features_heading": "Salient Features",
            "salient_features": [
                "Microcontroller based automatic source changeover with neutral isolation",
                "Intelligent re-connection once trip has occurred due to either overvoltage or overload",
                "Optional iACCL with Prepaid Metering feature can be given for DG side",
                "Individual phase overload monitoring in 3 phase ACCL & overvoltage protection for DG",
                "Inbuilt display & measurement of I, V, F and KWh on the both generator & mains in iACCL M600",
            ],
            "app_heading": "Applications",
            "app_list": [
                "ACCL perform intelligent tripping to save the age of the cables",
                "Reduced wiring cost as single phase ACCL has separate control for power and lighting load",
                "A Automate power distribution, protect expensive equipment and prevent fatal risks",
                "ACCL Logic for Currents up to 120 Amps is available."
            ]
        },
        {
            "id": 6,
            "heading": "Power Quailyt Analayzer",
            "top_desc": "Prepaid meter is a Single Device for electricity, gas and water measurement. Prepaid meter manufactures in India",
            "image": '../images/powerqualityanalyzer.png',
            "bottom_desc": "Multifunction | Dual source | Over voltage/current cut off for protection | Post paid meter | Prepaid meter",
            "prod_id": "powerqualityanalyzer",
            "features_heading": "Salient Features",
            "salient_features": ["Real time monitoring and reporting",
                "Composite system with EMS and PEMS",
                "Desired reports like, Doff wise, shift wise, count wise, production, energy, UKG",
                "Speed Vs Kw curve, trends, bar graphs, comparisons",
                "Alerts on higher UKG, lesser production, utilization & power fluctuations.",
                "Maintenance alerts based on run hours production cost analysis - Cost Audits - Energy Audits",
            ],
            "app_heading": "Applications",
            "app_list": [
                " Energy savings will bring down operational cost & increases the plant efficiency",
                "Scheduling of preventive maintenance",
                "Higher productivity- Lesser downtime",
                "Effective utilization of manpower and resources",
            ]
        },
        {
            "id": 7,
            "heading": "Smart I/O",
            "top_desc": "Smartest way to capture the input & communicate data output",
            "image": '../images/smartio.png',
            "bottom_desc": "Universal Input | Universal Output | Digital Output",
            "prod_id": "smartio",
            "features_heading": "Salient Features",
            "salient_features": [
                "Up to 8 Universal Inputs field configurable",
                " Up to 4 Universal Outputs field configurable ",
                " 6 SSR outputs and 2 relay outputs (optional)",
                " Communication LON / RS485",
                " Pluggable terminal blocks, for installation wiring and ease of maintenance",
                
            ],
            "app_heading": "Applications",
            "app_list": [
                "Lighting management",
                "Breaker status monitoring",
                " Home automation.",
                
            ]
        }
    ]
};


const SmartNetwork = {
    'Title': 'Smart Networking',
    'Products': [{
            "id": 1,
            "heading": "Split Core CT",
            "top_desc": "Seamless switching between sources for uninterrupted supply.Automatic Transfer Switch manufactures in India",
            "image": '../images/splitcorect.png',
            "bottom_desc": " Overload Tripping Logic | Automatic DG Start/Stop | Fire/External Fault Trip | Safe and Rapid Switching | Automatic Transfer",
            "prod_id": "splitcorect",
            "features_heading": "Salient Features",
            "salient_features": [
                "Automatic start/stop operation of DG on mains failure Overload tripping (optional) with inverse curve logic",
                "Automatic transfer switch are provided with fire alarm / external fault trip feature",
                "Inbuilt control switch for selecting auto/manual mode",
                "Automatic transfer switch have high capacity to withstand short circuit",
                "Optional RS485 communication and cloud",
            ],
            "app_heading": "Applications",
            "app_list": ["Monitor real-time system voltage and frequency ",
                " Monitor source healthiness and output for both Source",
                " Wide range of motor operating voltage from 150VAC – 285V AC",
                " Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.",
            ]
        },
        {
            "id": 2,
            "heading": "Converter",
            "top_desc": "Seamless switching between sources for uninterrupted supply. Automatic Transfer Switch manufactures in India",
            "image": '../images/converter.png',
            "bottom_desc": " Overload Tripping Logic | Automatic DG Start/Stop | Fire/External Fault Trip | Safe and Rapid Switching | Automatic Transfer",
            "prod_id": "converter",
            "features_heading": "Salient Features",
            "salient_features": [
                "Automatic start/stop operation of DG on mains failure Overload tripping (optional) with inverse curve logic",
                "Automatic transfer switch are provided with fire alarm / external fault trip feature",
                "Inbuilt control switch for selecting auto/manual mode",
                "Automatic transfer switch have high capacity to withstand short circuit",
                " Optional RS485 communication and cloud",
            ],
            "app_heading": "Applications",
            "app_list": [
                "Monitor real-time system voltage and frequency.",
                "Monitor source healthiness and output for both Source",
                "Wide range of motor operating voltage from 150VAC – 285V AC",
                "Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers."
            ],
        },
        {
            "id": 3,
            "heading": "Gateway",
            "top_desc": "Seamless switching between sources for uninterrupted supply. Automatic Transfer Switch manufactures in India",
            "image": '../images/gateway.png',
            "bottom_desc": " Overload Tripping Logic | Automatic DG Start/Stop | Fire/External Fault Trip | Safe and Rapid Switching | Automatic Transfer ",
            "prod_id": "gateway",
            "features_heading": "Salient Features",
            "salient_features": [
                "User friendly contactless prepaid metering solution",
                "Automatic start/stop operation of DG on mains failure Overload tripping (optional) with inverse curve logic",
                "Automatic transfer switch are provided with fire alarm / external fault trip feature.",
                "Inbuilt control switch for selecting auto/manual mode.",
                "Automatic transfer switch have high capacity to withstand short circuit.",
                "Optional RS485 communication and cloud.",
            ],
            "app_heading": "Applications",
            "app_list": [
                "Monitor real-time system voltage and frequency",
                "Monitor source healthiness and output for both Source",
                "Wide range of motor operating voltage from 150VAC – 285V AC",
                "Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.",
            ]
        },
        
    ]
};

const Eaton = {
    'Title': 'Eaton Products',
    'Products': [{
        "id": 1,
        "heading": "xPole Combined RCD/MCB Device PKNM, 1+N-pole",
        "image": '../images/eaton/mcb1.jpg',
        "paragraph": "This residual current operated circuit breaker with integrated overcurrent protection in 1+N pole is a high-quality residual current circuit breaker and miniature circuit breaker combination. This RCD/MCB combination PKNM switch is not only available as an AC and pulse current sensitive standard type A, but also as a mixing frequency sensitive type F, as a type G or G/A triggering with a time delay of at least 10 ms. While the AC and the A are only impulse current resistant up to 250 A, the other three types F, G and G/A offer an increased impulse current resistance of more than 3 kA.",
        "features": {
            "rated_current": "up to 40 A",
            "compliant_to": "IEC/EN 61009",
            "rated_breaking_capacity": "6 kA or 10 kA",
        }
      },
      
      {
        "id": 2,
        "heading": "xEffect Combined RCD/MCB Device, FRBmM, 1+N, 2, 3 and 3+N-pole",
        "image": "../images/eaton/eatonxeffect.jpg",
        "paragraph": "This residual current operated circuit breaker with integrated overcurrent protection is a high-quality residual current circuit breaker and miniature circuit breaker combination with line voltage-independent tripping and a wide variety of rated tripping currents. A tripping by a fault current is signalled by the blue display, white indicates that either the MCB part was tripped or that it was switched off. It is compatible with Busbars. A twin-purpose terminal (lift/open-mouthed) is available for easy and quick mounting.",
        "features": {
            "rated_current": "up to 40 A",
            "compliant_to": "IEC/EN 61009",
            "rated_breaking_capacity": "6 kA or 10 kA",
        }},

      {
        "id": 3,
        "heading": "FAZ-NA xEffect Miniature Circuit Breaker",
        "image": "../images/eaton/eatonfaz.jpg",
        "paragraph": "The FAZ-NA / FAZ-RT miniature circuit breaker is a protective device equipped with both a thermal and an electromagnetic release that is available in 1-, 2-, 3- and 4- pole versions. The FAZ-NA is available with rated currents of 0.5 A to 63 A. The switching capacity is 15 kA according to IEC/EN 60947-2, and 10 kA or 14 kA according to UL 489/CSA C22.2 No. 5, depending on the device type.",
        "features": {
            "rated_current": "on DIN rail",
            "compliant_to": "1-, 2-, 3- and 4-pole",
            "rated_breaking_capacity": "3",
        }
      },

      {
        "id": 4,
        "heading": "FAZ-DC xEffect Miniature Circuit Breaker",
        "image": "../images/eaton/eatonfazdc.jpg",
        "paragraph": "The FAZ-DC miniature circuit breaker is a protective device equipped with both a thermal and an electromagnetic release that is available in 1- and 2-pole versions. The FAZ is available with rated currents of 2 A to 50 A. The switching capacity is 10 kA according to IEC/EN 60947-2 The DC rated voltage is 220 V per pole for the 2 A version, and 250 V per pole for the 3 A to 50 A versions. A guide for secure terminal connection and a 3-position DIN-rail simplify the installation of the circuit breaker.",
        "features": {
            "rated_current": "IEC/EN 60947-2",
            "compliant_to": "up to 50 A",
            "rated_breaking_capacity": "1- and 2-pole",
        }},

      {
        "id": 5,
        "heading": "xEffect Combined RCD/MCB Device, FRBmM, 1+N, 2, 3 and 3+N-pole",
        "image": "../images/eaton/eatonxeffectrcbo.jpg",
        "paragraph": "This residual current operated circuit breaker with integrated overcurrent protection is a high-quality residual current circuit breaker and miniature circuit breaker combination with line voltage-independent tripping and a wide variety of rated tripping currents. A tripping by a fault current is signalled by the blue display, white indicates that either the MCB part was tripped or that it was switched off. It is compatible with Busbars. A twin-purpose terminal (lift/open-mouthed) is available for easy and quick mounting.",
        "features": {
            "rated_current": "up to 40 A",
            "compliant_to": "IEC/EN 61009",
            "rated_breaking_capacity": "6 kA or 10 kA",
        }},

      {
        "id": 6,
        "heading": "AZ xEffect Miniature Circuit Breaker",
        "image": "../images/eaton/eatonaz.jpg",
        "paragraph": "The AZ miniature circuit breaker is a protective device equipped with both a thermal and an electromagnetic release that is available in 1-, 2-, 3-, 4- and 3+N pole versions. The AZ is suitable for both AC and DC applications (60 V per pole) with rated currents from 20 A to 125 A. Depending on the device type, it has a switching capacity of up to 25 kA according to IEC/EN 60947-2.",
        "features": {
            "rated_current": "1-, 2-, 3-, 4- and 3+N pole",
            "compliant_to": "IEC/EN 60947-2",
            "rated_breaking_capacity": "up to 125 A",
        }},

      {
        "id": 7,
        "heading": "FAZ-NA-DC xEffect Miniature Circuit Breaker",
        "image": "../images/eaton/eatonfaznadc.jpg",
        "paragraph": "The FAZ-NA-DC miniature circuit breaker is a protective device that is equipped with both a thermal and an electromagnetic release. The FAZ-NA-DC for DC applications is available in 1-pole and 2-pole versions with rated currents from 2 A to 40 A. The switching capacity is 10 kA according to IEC/EN 60947-2, UL 489 and CSA C22.2 No. 5. The DC rated voltage for all types is 125 V per pole according to UL 489/CSA C22.2 No. 5, and 220 V per pole for the 2 A version / 250 V per pole for the 3 A to 40 A versions according to IEC/EN 60947-2.",
        "features": {
            "rated_current": "C",
            "compliant_to": "1- and 2-pole",
            "rated_breaking_capacity": "up to 40 A",
        }},
      {
        "id": 8,
        "heading": "PLS6-DC and PL10-DC-IN xPole Miniature Circuit Breaker",
        "image": "../images/eaton/eatonminiature.jpg",
        "paragraph": "The PLS6 miniature circuit breaker (MCB) is a protective device that’s equipped with both a thermal and an electromagnetic release. The former responds in the event of an overload, while the latter offers protection against short circuits. The 1- and 2-pole PLS6 devices for DC applications are available with rated currents from 1 A to 50 A and 4P PL10 devices for DC application are available with rated currents from 16A to 50A and can withstand rated voltages of up to 250 V DC Per pole. The switching capacity is 10 kA. The PLS6-DC and PL10-DC-IN is busbar compatible, and double life/claw terminals are available at the top as well as at the bottom for easy mounting.",
        "features": {
            "rated_current": "compliant MCB",
            "compliant_to": "up to 50 A",
            "rated_breaking_capacity": "C",
        }},
        {
            "id": 9,
            "heading": "BZM Molded Case Circuit Breaker",
            "image": '../images/eaton/mcb1.jpg',
            "paragraph": "Eaton's BZM Molded Case Circuit Breakers offer optimum and efficient protection for low voltage applications in power distribution systems. The advantage of the BZM series is its simple use: The thermal and magnetic release system for over-current and short-circuit protection of your system is already factory set. Along with simple handling of the product and its accessories, Eaton’s BZM offering provides an attractive product assortment.",
            "features": {
                "rated_current": "up to 40 A",
                "compliant_to": "IEC/EN 61009",
                "rated_breaking_capacity": "6 kA or 10 kA",
                }
            },
        
            {
                "id": 10,
                "heading": "NZM Molded Case Circuit Breaker",
                "image": "../images/eaton/eatonaz.jpg",
                "paragraph": "The new Eaton circuit-breakers cover a range from 15 to 1600 A with just four frame sizes. And they are optimally matched to one another. The wide application spectrum covers every requirement as Eaton has closely examined what every customer needs and implemented the appropriate solutions. Outstanding, for example, is the continuous switching power range – which extends from the smallest to the largest circuit-breaker or the modular system which can be matched without difficulty to suit the specific application.",
                "features": {
                    "rated_current": "15 to 1600 A",
                    "compliant_to": "1- and 2-pole",
                    "rated_breaking_capacity": "150 kA.",
                }
            }],
};


export { SmartMonitor, SmartControl, SmartResource, SmartNetwork, Eaton  };