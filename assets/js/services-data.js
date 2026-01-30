const servicesData = {
    'haircut': {
        title: 'Classic Haircut',
        headerTitle: 'THE BARBERX SUPREME CUT',
        price: '$35.00',
        duration: '45 Mins',
        image: 'assets/images/services/haircut.jpg',
        description: 'Experience the pinnacle of grooming with our signature Classic Haircut service. This isn\'t just a trim; it\'s a comprehensive styling session designed to enhance your best features.',
        includes: [
            'Thorough consultation to understand your style goals.',
            'Shampoo and conditioning with premium products.',
            'Precision cut using scissor and clipper techniques.',
            'Hot towel neck shave for a clean finish.',
            'Styling with pro-grade pomades or clays.'
        ],
        extraInfo: 'Our master barbers take their time to ensure every strand is perfectly placed. Whether you\'re looking for a modern fade, a classic pompadour, or a simple business cut, we have the expertise to deliver.'
    },
    'beard': {
        title: 'Beard Sculpting',
        headerTitle: 'MASTER BEARD DESIGN',
        price: '$25.00',
        duration: '30 Mins',
        image: 'assets/images/services/beard.jpg',
        description: 'Your beard is a statement of your personality. Our Beard Sculpting service ensures that statement is bold, clean, and perfectly suited to your face shape.',
        includes: [
            'Facial structure analysis for the best beard shape.',
            'Precision trimming and length adjustment.',
            'Straight razor line-up for sharp edges.',
            'Application of premium beard oils and balms.',
            'Hot towel treatment to soften the hair.'
        ],
        extraInfo: 'We don\'t just trim; we sculpt. From short stubble to long lumberjack beards, we know how to handle all types of facial hair to make you look sharp.'
    },
    'shave': {
        title: 'Royal Shave',
        headerTitle: 'THE ULTIMATE INDULGENCE',
        price: '$40.00',
        duration: '60 Mins',
        image: 'assets/images/services/shave.jpg',
        description: 'Step back in time and enjoy the most relaxing grooming experience known to man. Our Royal Shave is a multi-step process that leaves your skin feeling smooth and revitalized.',
        includes: [
            'Pre-shave oil application to protect the skin.',
            'Multiple hot towel wraps to open pores.',
            'Rich lathering with traditional badger brushes.',
            'Double pass straight razor shave.',
            'Cold towel finish and post-shave mask.'
        ],
        extraInfo: 'This is more than a shave; it\'s a ritual. Perfect for special occasions or when you simply need to decompress and treat yourself to the best.'
    },
    'facial': {
        title: 'Express Facial',
        headerTitle: 'GENTLEMAN\'S SKIN REVIVAL',
        price: '$30.00',
        duration: '30 Mins',
        image: 'assets/images/hero/hero-1.jpg',
        description: 'Modern life can be tough on your skin. Our Express Facial is designed specifically for men\'s skin needs, providing a deep clean and hydration boost in just 30 minutes.',
        includes: [
            'Deep cleansing to remove impurities.',
            'Exfoliating scrub to clear dead skin cells.',
            'Relaxing facial massage to improve circulation.',
            'Nourishing face mask tailored to your skin type.',
            'Moisturizing finish with SPF protection.'
        ],
        extraInfo: 'Clear skin is a sign of health and confidence. This service is the perfect add-on to any haircut or shave to complete your grooming routine.'
    },
    'color': {
        title: 'Grey Blending',
        headerTitle: 'NATURAL YOUTH RESTORATION',
        price: '$50.00',
        duration: '45 Mins',
        image: 'assets/images/hero/hero-2.jpg',
        description: 'Maintain your edge with our subtle Grey Blending service. We don\'t "dye" your hair; we blend the greys to give you a natural, peppered look that subtracts years from your appearance.',
        includes: [
            'Personalized color matching consultation.',
            'Application of professional, ammonia-free color.',
            'Natural processing for a non-artificial look.',
            'Gentle shampoo and color-safe conditioning.',
            'Style and finish with maintenance advice.'
        ],
        extraInfo: 'The goal is to look like you\'ve just had a great vacation, not a trip to the colorist. It\'s subtle, effective, and grows out naturally without harsh lines.'
    },
    'junior': {
        title: 'Junior Cut',
        headerTitle: 'THE YOUNG GENTLEMAN',
        price: '$25.00',
        duration: '30 Mins',
        image: 'assets/images/team/barber1.jpg',
        description: 'Grooming habits start early. We provide a fun, patient, and professional environment for young gentlemen (under 12) to get a haircut they\'ll be proud of.',
        includes: [
            'Patient consultation with child and parent.',
            'Comfort-focused cutting experience.',
            'Cool styling with kid-friendly products.',
            'A small treat for being a great client!',
            'Quick tips for parents on hair maintenance.'
        ],
        extraInfo: 'We know that a trip to the barber can be intimidating for some kids. Our team is trained to make the experience enjoyable and stress-free for both children and parents.'
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = servicesData;
}
