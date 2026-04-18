// ========================================
// SkinSafe - Ingredient Analysis Logic
// Simple and beginner-friendly JavaScript
// ========================================

// Good ingredients that are usually skin-friendly
const goodIngredients = [
  { name: 'aloe vera', reason: 'Soothes and hydrates skin naturally' },
  { name: 'hyaluronic acid', reason: 'Excellent hydration booster for the skin' },
  { name: 'niacinamide', reason: 'Helps with oil control and uneven skin tone' },
  { name: 'ceramides', reason: 'Supports the skin barrier and keeps moisture in' },
  { name: 'vitamin c', reason: 'Brightens skin and supports antioxidant care' },
  { name: 'green tea extract', reason: 'Calms skin and gives antioxidant support' },
  { name: 'glycerin', reason: 'Pulls moisture into the skin' },
  { name: 'squalane', reason: 'Lightweight moisturizer that feels gentle' },
  { name: 'peptides', reason: 'Supports firmer and smoother looking skin' },
  { name: 'centella asiatica', reason: 'Helps calm redness and irritation' },
  { name: 'cica', reason: 'Supports irritated skin and helps it feel calmer' },
  { name: 'jojoba oil', reason: 'Feels nourishing and may balance skin well' },
  { name: 'shea butter', reason: 'Rich moisturizer, especially helpful for dryness' },
  { name: 'vitamin e', reason: 'Supports skin protection and softness' },
  { name: 'zinc oxide', reason: 'Common gentle mineral sunscreen ingredient' },
  { name: 'allantoin', reason: 'Comforts skin and supports healing' },
  { name: 'panthenol', reason: 'Hydrates skin and supports barrier repair' },
  { name: 'rice water', reason: 'Helps skin feel soft, fresh, and calm' },
  { name: 'snail mucin', reason: 'Gives hydration and helps support skin repair' },
  { name: 'licorice root extract', reason: 'Supports brighter and more even-looking skin' },
  { name: 'beta glucan', reason: 'Hydrates well and helps reduce dryness' },
  { name: 'madecassoside', reason: 'Often used to calm sensitive skin' },
  { name: 'azelaic acid', reason: 'Can help with acne, marks, and redness' },
  { name: 'cucumber extract', reason: 'Gives a cool and soothing feel to skin' },
  { name: 'oat extract', reason: 'Feels gentle and comforting on the skin' },
  { name: 'colloidal oatmeal', reason: 'Good support for dry and sensitive skin' },
  { name: 'rose water', reason: 'Can refresh skin and give mild soothing support' },
  { name: 'water', reason: 'Common base ingredient for hydration' },
  { name: 'aqua', reason: 'Another name for water in ingredient lists' }
];

// Harmful ingredients that may not be good for many people
const harmfulIngredients = [
  { name: 'alcohol', reason: 'Can dry out and irritate skin' },
  { name: 'alcohol denat', reason: 'Drying alcohol that can weaken the skin barrier' },
  { name: 'isopropyl alcohol', reason: 'Can strip moisture from the skin' },
  { name: 'parabens', reason: 'May trigger sensitivity in some people' },
  { name: 'methylparaben', reason: 'Preservative that may irritate sensitive skin' },
  { name: 'propylparaben', reason: 'May not suit easily reactive skin' },
  { name: 'sulfates', reason: 'Can clean too harshly and strip natural oils' },
  { name: 'sodium lauryl sulfate', reason: 'Strong cleanser that may irritate skin' },
  { name: 'sodium laureth sulfate', reason: 'May cause dryness for some skin types' },
  { name: 'fragrance', reason: 'Very common cause of skin irritation' },
  { name: 'parfum', reason: 'Hidden fragrance mix that may trigger reactions' },
  { name: 'formaldehyde', reason: 'Known irritant and not ideal for skincare' },
  { name: 'mineral oil', reason: 'May feel heavy and may not suit acne-prone skin' },
  { name: 'petrolatum', reason: 'Can feel too occlusive for some people' },
  { name: 'phthalates', reason: 'Chemical additives that may not be skin-friendly' },
  { name: 'triclosan', reason: 'May disturb the skin microbiome' },
  { name: 'oxybenzone', reason: 'Can irritate some skin types' },
  { name: 'synthetic colors', reason: 'Artificial dyes may cause reactions' },
  { name: 'artificial color', reason: 'Added colors can be irritating on the face' },
  { name: 'menthol', reason: 'Cooling feel can hide irritation or stinging' },
  { name: 'camphor', reason: 'May feel harsh on delicate facial skin' },
  { name: 'coal tar', reason: 'Heavy ingredient that may not suit regular cosmetic use' }
];

// Ingredients that depend on the user's skin type
const cautionIngredients = [
  {
    name: 'retinol',
    cautionFor: ['sensitive', 'dry'],
    reason: 'Powerful ingredient, but it may irritate sensitive or dry skin'
  },
  {
    name: 'retinoid',
    cautionFor: ['sensitive', 'dry'],
    reason: 'May cause peeling or dryness on delicate skin'
  },
  {
    name: 'salicylic acid',
    cautionFor: ['dry', 'sensitive'],
    reason: 'Great for acne, but may over-dry dry or sensitive skin'
  },
  {
    name: 'benzoyl peroxide',
    cautionFor: ['dry', 'sensitive'],
    reason: 'Helpful for pimples, but can feel too harsh on some skin'
  },
  {
    name: 'glycolic acid',
    cautionFor: ['sensitive'],
    reason: 'Exfoliates skin, but may sting sensitive skin'
  },
  {
    name: 'lactic acid',
    cautionFor: ['sensitive'],
    reason: 'Gentler than some acids, but still may irritate sensitive skin'
  },
  {
    name: 'witch hazel',
    cautionFor: ['dry', 'sensitive'],
    reason: 'Can feel too drying for some skin types'
  },
  {
    name: 'tea tree oil',
    cautionFor: ['dry', 'sensitive'],
    reason: 'May help acne, but can also irritate dry or sensitive skin'
  },
  {
    name: 'aha',
    cautionFor: ['sensitive'],
    reason: 'Exfoliating acid group that may irritate sensitive skin'
  },
  {
    name: 'bha',
    cautionFor: ['dry', 'sensitive'],
    reason: 'Can be useful, but may dry out some skin types'
  },
  {
    name: 'kojic acid',
    cautionFor: ['sensitive'],
    reason: 'Useful for pigmentation, but may irritate sensitive skin'
  },
  {
    name: 'mandelic acid',
    cautionFor: ['sensitive', 'dry'],
    reason: 'Milder acid, but still may feel strong for fragile skin'
  },
  {
    name: 'ascorbic acid',
    cautionFor: ['sensitive'],
    reason: 'Pure vitamin C can sting on sensitive skin'
  },
  {
    name: 'clay',
    cautionFor: ['dry'],
    reason: 'Nice for oily skin, but may feel too drying for dry skin'
  },
  {
    name: 'charcoal',
    cautionFor: ['dry', 'sensitive'],
    reason: 'Absorbs oil strongly, so it may feel harsh on some skin types'
  },
  {
    name: 'tea tree',
    cautionFor: ['dry', 'sensitive'],
    reason: 'Can be helpful for acne, but may irritate some skin types'
  }
];

// Getting all the HTML elements we need
const skinTypeSelect = document.getElementById('skin-type');
const ingredientsInput = document.getElementById('ingredients');
const analyzeBtn = document.getElementById('analyze-btn');
const resultsSection = document.getElementById('results-section');
const riskBadge = document.getElementById('risk-badge');
const ingredientsBreakdown = document.getElementById('ingredients-breakdown');
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const uploadNote = document.getElementById('upload-note');

// Click on upload area opens file box
uploadArea.addEventListener('click', function () {
  fileInput.click();
});

// This is only UI demo, no real image analysis here
fileInput.addEventListener('change', function (event) {
  if (event.target.files.length > 0) {
    uploadNote.textContent = 'Selected: ' + event.target.files[0].name;
    alert('Image selected! In a real AI app, ingredients would be read from the image.');
  }
});

// Main button event
analyzeBtn.addEventListener('click', analyzeIngredients);

function analyzeIngredients() {
  const skinType = skinTypeSelect.value.toLowerCase();
  const ingredientText = ingredientsInput.value;

  if (!ingredientText.trim()) {
    alert('Please enter some ingredients to analyze.');
    return;
  }

  // Split the text by commas and clean the values
  const ingredientList = ingredientText
    .split(',')
    .map(function (item) {
      return item.trim().toLowerCase();
    })
    .filter(function (item) {
      return item.length > 0;
    });

  const results = [];
  let harmfulCount = 0;
  let cautionCount = 0;
  let goodCount = 0;
  let unknownCount = 0;

  // Check every ingredient one by one
  for (let i = 0; i < ingredientList.length; i++) {
    const ingredient = ingredientList[i];
    let found = false;

    // Step 1: Check harmful ingredients
    for (let j = 0; j < harmfulIngredients.length; j++) {
      if (ingredient.includes(harmfulIngredients[j].name) || harmfulIngredients[j].name.includes(ingredient)) {
        results.push({
          name: ingredient,
          status: 'harmful',
          icon: '\u274C',
          reason: harmfulIngredients[j].reason
        });
        harmfulCount++;
        found = true;
        break;
      }
    }

    // Step 2: Check caution ingredients based on skin type
    if (!found) {
      for (let j = 0; j < cautionIngredients.length; j++) {
        if (ingredient.includes(cautionIngredients[j].name) || cautionIngredients[j].name.includes(ingredient)) {
          if (skinType && cautionIngredients[j].cautionFor.includes(skinType)) {
            results.push({
              name: ingredient,
              status: 'caution',
              icon: '\u26A0\uFE0F',
              reason: cautionIngredients[j].reason
            });
            cautionCount++;
          } else {
            results.push({
              name: ingredient,
              status: 'good',
              icon: '\u2705',
              reason: cautionIngredients[j].reason + ' (Looks okay for your selected skin type.)'
            });
            goodCount++;
          }
          found = true;
          break;
        }
      }
    }

    // Step 3: Check good ingredients
    if (!found) {
      for (let j = 0; j < goodIngredients.length; j++) {
        if (ingredient.includes(goodIngredients[j].name) || goodIngredients[j].name.includes(ingredient)) {
          results.push({
            name: ingredient,
            status: 'good',
            icon: '\u2705',
            reason: goodIngredients[j].reason
          });
          goodCount++;
          found = true;
          break;
        }
      }
    }

    // Step 4: If ingredient is not found anywhere
    if (!found) {
      results.push({
        name: ingredient,
        status: 'unknown',
        icon: '\u2753',
        reason: 'Not in our current ingredient list, so check carefully before use'
      });
      unknownCount++;
    }
  }

  // Decide overall risk
  let riskLevel = 'Safe';
  let riskClass = 'safe';
  let riskEmoji = '\u2705';

  if (harmfulCount >= 2 || (harmfulCount >= 1 && cautionCount >= 2)) {
    riskLevel = 'High Risk';
    riskClass = 'high';
    riskEmoji = '\uD83D\uDEAB';
  } else if (harmfulCount === 1 || cautionCount >= 2 || (cautionCount === 1 && unknownCount >= 2)) {
    riskLevel = 'Moderate Risk';
    riskClass = 'moderate';
    riskEmoji = '\u26A0\uFE0F';
  }

  displayResults(results, riskLevel, riskClass, riskEmoji, goodCount, cautionCount, harmfulCount, unknownCount);
}

function displayResults(results, riskLevel, riskClass, riskEmoji, goodCount, cautionCount, harmfulCount, unknownCount) {
  riskBadge.className = 'risk-badge ' + riskClass;
  riskBadge.innerHTML =
    riskEmoji + ' Overall Rating: ' + riskLevel +
    '<small>Good: ' + goodCount + ' | Caution: ' + cautionCount + ' | Harmful: ' + harmfulCount + ' | Unknown: ' + unknownCount + '</small>';

  let breakdownHTML = '<h3>Ingredient Breakdown</h3>';

  // Sort results so risky items appear first
  const sortOrder = {
    harmful: 0,
    caution: 1,
    unknown: 2,
    good: 3
  };

  results.sort(function (a, b) {
    return sortOrder[a.status] - sortOrder[b.status];
  });

  for (let i = 0; i < results.length; i++) {
    const item = results[i];
    const displayName = item.name.charAt(0).toUpperCase() + item.name.slice(1);

    breakdownHTML += `
      <div class="ingredient-item ${item.status}">
        <span class="ingredient-icon">${item.icon}</span>
        <div class="ingredient-info">
          <div class="ingredient-name">${displayName}</div>
          <div class="ingredient-reason">${item.reason}</div>
        </div>
      </div>
    `;
  }

  ingredientsBreakdown.innerHTML = breakdownHTML;
  resultsSection.classList.add('visible');
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
