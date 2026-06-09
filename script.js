// ===========================
// System Content Database
// ===========================

const systemsData = {
    basic: {
        title: 'Basic Concepts',
        content: `
            <h3>Introduction to Human Anatomy</h3>
            <p>Human anatomy is the scientific study of the body's structures. Understanding basic anatomical concepts is fundamental to medical education.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Anatomical Position:</strong> Standard position used to describe anatomical relationships</li>
                <li><strong>Directional Terms:</strong> Superior, inferior, anterior, posterior, medial, lateral</li>
                <li><strong>Body Planes:</strong> Sagittal, coronal, and transverse planes</li>
                <li><strong>Body Cavities:</strong> Cranial, thoracic, abdominal, and pelvic cavities</li>
                <li><strong>Organ Systems:</strong> Organization of organs into functional systems</li>
            </ul>
            
            <h4>Fundamental Concepts:</h4>
            <p>The human body is composed of multiple integrated systems working together to maintain homeostasis. Each system performs specific functions while coordinating with other systems.</p>
        `
    },
    growth: {
        title: 'Growth, Development & Genetics',
        content: `
            <h3>Human Growth and Development</h3>
            <p>Growth and development represent the changes that occur throughout the human lifespan, from conception to old age.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Embryonic Development:</strong> Formation of primary germ layers and organ systems</li>
                <li><strong>Fetal Development:</strong> Growth and maturation during pregnancy</li>
                <li><strong>Postnatal Growth:</strong> Growth patterns from infancy to adulthood</li>
                <li><strong>Genetics:</strong> Inheritance patterns, DNA structure, and gene expression</li>
                <li><strong>Puberty:</strong> Hormonal changes and physical maturation</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>Understanding genetic inheritance helps explain how traits are passed from parents to offspring and how genetic mutations can affect health.</p>
        `
    },
    immune: {
        title: 'Immune System and Immunology',
        content: `
            <h3>The Immune System</h3>
            <p>The immune system protects the body against infections and foreign substances through various defense mechanisms.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Innate Immunity:</strong> First line of defense including physical and chemical barriers</li>
                <li><strong>Adaptive Immunity:</strong> Specific immune responses involving T and B cells</li>
                <li><strong>Lymphoid Organs:</strong> Thymus, lymph nodes, spleen, and bone marrow</li>
                <li><strong>Antibodies:</strong> Y-shaped proteins that recognize pathogens</li>
                <li><strong>Immune Disorders:</strong> Autoimmune diseases, immunodeficiencies, and allergies</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>The immune system maintains a delicate balance between protecting against pathogens and preventing damage to the body's own cells.</p>
        `
    },
    nervous: {
        title: 'Autonomic Nervous System',
        content: `
            <h3>The Autonomic Nervous System</h3>
            <p>The autonomic nervous system regulates involuntary body functions including heart rate, digestion, and respiration.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Sympathetic Division:</strong> "Fight or flight" responses during stress</li>
                <li><strong>Parasympathetic Division:</strong> "Rest and digest" functions during relaxation</li>
                <li><strong>Enteric Nervous System:</strong> Regulates gastrointestinal functions</li>
                <li><strong>Neurotransmitters:</strong> Chemical messengers (acetylcholine, norepinephrine)</li>
                <li><strong>Autonomic Reflexes:</strong> Automatic responses to stimuli</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>The balance between sympathetic and parasympathetic activity is essential for maintaining homeostasis and responding appropriately to environmental changes.</p>
        `
    },
    integumentary: {
        title: 'Integumentary System',
        content: `
            <h3>The Skin and Integumentary System</h3>
            <p>The integumentary system consists of skin, hair, and nails, providing protection and sensory information.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Epidermis:</strong> Outermost layer with multiple cell types</li>
                <li><strong>Dermis:</strong> Connective tissue layer containing blood vessels and nerves</li>
                <li><strong>Hypodermis:</strong> Subcutaneous tissue for insulation and protection</li>
                <li><strong>Accessory Structures:</strong> Hair follicles, sweat glands, sebaceous glands</li>
                <li><strong>Skin Functions:</strong> Protection, temperature regulation, vitamin D synthesis</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>The skin serves as a critical barrier against pathogens and environmental damage while providing sensory feedback about the external environment.</p>
        `
    },
    musculo: {
        title: 'Musculo-skeletal System',
        content: `
            <h3>The Skeletal and Muscular System</h3>
            <p>The musculo-skeletal system provides support, movement, and protection for the body.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Bone Structure:</strong> Compact and spongy bone organization</li>
                <li><strong>Joints:</strong> Articulations and different types of movement</li>
                <li><strong>Skeletal Muscles:</strong> Organization and contraction mechanisms</li>
                <li><strong>Muscle Contraction:</strong> Sliding filament theory and the role of ATP</li>
                <li><strong>Muscle Groups:</strong> Agonists, antagonists, and synergists</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>Skeletal muscles require proper neural control and energy supply to function effectively and maintain posture and movement.</p>
        `
    },
    haemopoietic: {
        title: 'Haemopoietic System',
        content: `
            <h3>Blood and Haemopoietic System</h3>
            <p>The haemopoietic system includes bone marrow and blood-forming tissues responsible for producing blood cells.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Red Blood Cells:</strong> Oxygen transport via hemoglobin</li>
                <li><strong>White Blood Cells:</strong> Immune function and infection fighting</li>
                <li><strong>Platelets:</strong> Blood clotting and hemostasis</li>
                <li><strong>Plasma:</strong> Liquid component carrying proteins and nutrients</li>
                <li><strong>Hematopoiesis:</strong> Blood cell formation in bone marrow</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>Blood continuously transports oxygen, nutrients, hormones, and waste products while maintaining immune defenses and blood pressure regulation.</p>
        `
    },
    respiratory: {
        title: 'Respiratory System',
        content: `
            <h3>The Respiratory System</h3>
            <p>The respiratory system facilitates gas exchange, supplying oxygen to the body and removing carbon dioxide.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Upper Respiratory Tract:</strong> Nose, pharynx, and larynx</li>
                <li><strong>Lower Respiratory Tract:</strong> Trachea, bronchi, and lungs</li>
                <li><strong>Alveoli:</strong> Sites of gas exchange</li>
                <li><strong>Ventilation:</strong> Breathing mechanics and muscles of respiration</li>
                <li><strong>Gas Exchange:</strong> Diffusion across the alveolar-capillary membrane</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>The respiratory system works with the cardiovascular system to deliver oxygen to tissues and remove metabolic waste.</p>
        `
    },
    cardiovascular: {
        title: 'Cardiovascular System',
        content: `
            <h3>The Heart and Cardiovascular System</h3>
            <p>The cardiovascular system circulates blood throughout the body, delivering oxygen and nutrients.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Heart Structure:</strong> Chambers, valves, and conduction system</li>
                <li><strong>Cardiac Cycle:</strong> Systole and diastole phases</li>
                <li><strong>Arteries and Veins:</strong> Vessel structure and function</li>
                <li><strong>Blood Pressure:</strong> Regulation and measurement</li>
                <li><strong>Coronary Circulation:</strong> Blood supply to the heart</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>The heart pumps blood in a coordinated manner to ensure continuous circulation and adequate oxygen delivery to all tissues.</p>
        `
    },
    gastrointestinal: {
        title: 'Gastrointestinal System',
        content: `
            <h3>The Digestive System</h3>
            <p>The gastrointestinal system breaks down food, absorbs nutrients, and eliminates waste.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Mouth and Pharynx:</strong> Mechanical digestion and swallowing</li>
                <li><strong>Esophagus:</strong> Food transport via peristalsis</li>
                <li><strong>Stomach:</strong> Acid digestion and mixing</li>
                <li><strong>Small Intestine:</strong> Primary site of nutrient absorption</li>
                <li><strong>Large Intestine:</strong> Water reabsorption and waste elimination</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>Digestion involves both mechanical breakdown and chemical breakdown via enzymes, with coordinated muscle contractions moving food through the tract.</p>
        `
    },
    hepatobiliary: {
        title: 'Hepatobiliary System',
        content: `
            <h3>The Liver and Biliary System</h3>
            <p>The hepatobiliary system produces bile for fat digestion and performs vital metabolic functions.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Liver Structure:</strong> Hepatocytes and portal blood supply</li>
                <li><strong>Liver Functions:</strong> Metabolism, detoxification, and protein synthesis</li>
                <li><strong>Bile Production:</strong> Synthesis and storage in the gallbladder</li>
                <li><strong>Cholesterol Metabolism:</strong> Regulation and excretion</li>
                <li><strong>Drug Metabolism:</strong> Phase I, II, and III reactions</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>The liver is the body's major metabolic organ, handling nutrient processing, waste elimination, and synthesis of essential proteins.</p>
        `
    },
    renal: {
        title: 'Renal and Electrolyte System',
        content: `
            <h3>The Urinary System and Renal Physiology</h3>
            <p>The renal system maintains fluid and electrolyte balance while removing metabolic wastes.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Nephron Structure:</strong> Glomerulus, tubule, and collecting duct</li>
                <li><strong>Glomerular Filtration:</strong> Formation of ultrafiltrate</li>
                <li><strong>Tubular Reabsorption:</strong> Recovery of essential substances</li>
                <li><strong>Electrolyte Balance:</strong> Sodium, potassium, and chloride regulation</li>
                <li><strong>Acid-Base Balance:</strong> pH regulation by kidneys</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>The kidneys precisely regulate body fluid volume, osmolarity, and electrolyte composition while eliminating nitrogenous wastes.</p>
        `
    },
    endocrine: {
        title: 'Endocrine and Metabolism System',
        content: `
            <h3>The Endocrine System and Metabolic Regulation</h3>
            <p>The endocrine system uses hormones to regulate growth, metabolism, reproduction, and homeostasis.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Hypothalamic-Pituitary Axis:</strong> Central control of hormone secretion</li>
                <li><strong>Thyroid Gland:</strong> Metabolism and energy regulation</li>
                <li><strong>Pancreas:</strong> Blood glucose regulation via insulin and glucagon</li>
                <li><strong>Adrenal Glands:</strong> Stress response and mineral balance</li>
                <li><strong>Hormone Signaling:</strong> Receptor mechanisms and cellular responses</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>Hormones work through negative feedback mechanisms to maintain homeostasis and coordinate responses to physiological changes.</p>
        `
    },
    reproductive: {
        title: 'Reproductive System',
        content: `
            <h3>The Reproductive System</h3>
            <p>The reproductive system produces gametes and supports reproduction and sexual function.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Male Reproductive Anatomy:</strong> Testes, prostate, and accessory glands</li>
                <li><strong>Female Reproductive Anatomy:</strong> Ovaries, uterus, and fallopian tubes</li>
                <li><strong>Spermatogenesis:</strong> Production of sperm cells</li>
                <li><strong>Oogenesis:</strong> Production and maturation of eggs</li>
                <li><strong>Menstrual Cycle:</strong> Ovulation and hormonal regulation</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>The reproductive system is regulated by gonadal hormones and the hypothalamic-pituitary axis, supporting both gamete production and sexual function.</p>
        `
    },
    cns: {
        title: 'Central Nervous System and Special Senses',
        content: `
            <h3>The Brain, Spinal Cord, and Special Senses</h3>
            <p>The central nervous system processes information and controls body functions, while special senses provide awareness of the environment.</p>
            
            <h4>Key Topics:</h4>
            <ul class="content-list">
                <li><strong>Brain Anatomy:</strong> Cerebrum, cerebellum, and brainstem</li>
                <li><strong>Spinal Cord:</strong> White matter tracts and gray matter neurons</li>
                <li><strong>Vision:</strong> Eye structure and light processing</li>
                <li><strong>Hearing:</strong> Ear anatomy and sound transduction</li>
                <li><strong>Other Senses:</strong> Taste, smell, and somatosensation</li>
            </ul>
            
            <h4>Important Concepts:</h4>
            <p>The CNS integrates sensory information and generates appropriate motor responses through complex neural circuitry and synaptic transmission.</p>
        `
    }
};

// ===========================
// Navigation and Section Management
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDropdowns();
    initializeSystemContent();
});

function initializeNavigation() {
    const navLinks = document.querySelectorAll('[data-section]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            const system = this.getAttribute('data-system');
            
            if (section === 'system' && system) {
                navigateToSection('system', system);
            } else {
                navigateToSection(section);
            }
        });
    });
}

function navigateToSection(section, system = null) {
    // Hide all sections
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(s => s.classList.remove('active'));
    
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Show selected section
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Set active nav link
    const activeLink = document.querySelector(`[data-section="${section}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // If it's a system section, load the system content
    if (section === 'system' && system) {
        loadSystemContent(system);
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function initializeDropdowns() {
    const dropdownItems = document.querySelectorAll('.dropdown-menu a');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const system = this.getAttribute('data-system');
            navigateToSection('system', system);
        });
    });
}

// ===========================
// System Content Management
// ===========================

function initializeSystemContent() {
    const systemLinks = document.querySelectorAll('.system-list a');
    
    systemLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const system = this.getAttribute('data-system');
            
            // Remove active class from all system links
            systemLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Load system content
            loadSystemContent(system);
        });
    });
}

function loadSystemContent(system) {
    const systemData = systemsData[system];
    
    if (!systemData) {
        console.error('System data not found:', system);
        return;
    }
    
    const systemDisplay = document.getElementById('system-display');
    const systemTitle = document.getElementById('system-title');
    const systemDetails = document.getElementById('system-details');
    
    if (systemTitle && systemDetails) {
        systemTitle.textContent = systemData.title;
        systemDetails.innerHTML = systemData.content;
    }
    
    // Update active link in system list
    const systemLinks = document.querySelectorAll('.system-list a');
    systemLinks.forEach(link => {
        if (link.getAttribute('data-system') === system) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===========================
// Quiz Functionality (Placeholder)
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const quizButtons = document.querySelectorAll('.btn-start');
    
    quizButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quizName = this.closest('.quiz-card').querySelector('h3').textContent;
            alert(`Quiz "${quizName}" functionality will be implemented soon!`);
        });
    });
});

// ===========================
// Revision Notes Functionality (Placeholder)
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const revisionButtons = document.querySelectorAll('.btn-download');
    
    revisionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const noteName = this.closest('.revision-card').querySelector('h3').textContent;
            alert(`Revision notes for "${noteName}" will be available soon!`);
        });
    });
});

// ===========================
// Updates Read More Functionality
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const updateTitle = this.closest('.update-item').querySelector('h3').textContent;
            alert(`Full article for "${updateTitle}" will be displayed soon!`);
        });
    });
});

// ===========================
// Smooth Scroll Behavior
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
        }
    });
});

// ===========================
// Mobile Menu Toggle (Optional Enhancement)
// ===========================

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Add any keyboard shortcuts here in the future
});

// ===========================
// Utility Functions
// ===========================

function showNotification(message) {
    console.log(message);
}

function logUserAction(action) {
    console.log('User action:', action);
}
