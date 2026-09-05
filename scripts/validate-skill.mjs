import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const rootDir = process.cwd();
const skillPath = path.join(rootDir, 'SKILL.md');

console.log('🔍 Running Website Conversion Copywriter Skill Validation...');
console.log('───────────────────────────────────────────────────────');

let errors = 0;

// 1. Verify SKILL.md exists
if (!fs.existsSync(skillPath)) {
  console.error('❌ FAIL: SKILL.md not found.');
  process.exit(1);
}
console.log('✅ SKILL.md exists.');

// 2. Parse frontmatter
const skillContent = fs.readFileSync(skillPath, 'utf8');
const frontmatterMatch = skillContent.match(/^---\n([\s\S]*?)\n---/);

if (!frontmatterMatch) {
  console.error('❌ FAIL: No YAML frontmatter found in SKILL.md.');
  errors++;
} else {
  const frontmatter = frontmatterMatch[1];
  const requiredKeys = ['name:', 'description:', 'license:', 'compatibility:', 'metadata:', 'version:', 'allowed-tools:'];
  for (const key of requiredKeys) {
    if (!frontmatter.includes(key)) {
      console.error(`❌ FAIL: Frontmatter missing key: ${key}`);
      errors++;
    } else {
      console.log(`✅ Frontmatter includes: ${key}`);
    }
  }

  const descMatch = frontmatter.match(/description:\s*(.+)/);
  if (descMatch) {
    const descLen = descMatch[1].trim().length;
    if (descLen > 1024) {
      console.error(`❌ FAIL: description exceeds 1024 characters (${descLen}).`);
      errors++;
    } else {
      console.log(`✅ Description length compliant (${descLen} chars <= 1024).`);
    }
  }
}

// 3. Verify referenced files in SKILL.md exist
const referencedPaths = [
  'references/storybrand.md',
  'references/quick-frameworks.md',
  'references/made-to-stick.md',
  'references/page-architectures.md',
  'references/setup-script.md',
  'assets/BRAND_TEMPLATE.md',
  'scripts/validate-brand.sh'
];

for (const relPath of referencedPaths) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ FAIL: Referenced file missing: ${relPath}`);
    errors++;
  } else {
    console.log(`✅ Referenced file exists: ${relPath}`);
  }
}

// 4. Verify obsolete files are not referenced
if (skillContent.includes('contagious.md')) {
  console.error('❌ FAIL: SKILL.md still references contagious.md');
  errors++;
} else {
  console.log('✅ No obsolete references (contagious.md removed).');
}

// 5. Verify brand validation script against example-acme.md
try {
  const brandValOutput = execSync('bash scripts/validate-brand.sh brands/example-acme.md', { encoding: 'utf8' });
  if (brandValOutput.includes('RESULT: ✅ VALID')) {
    console.log('✅ Brand validation test passed (brands/example-acme.md is valid).');
  } else {
    console.error('❌ FAIL: validate-brand.sh did not return VALID for example-acme.md');
    errors++;
  }
} catch (err) {
  console.error('❌ FAIL: Error running scripts/validate-brand.sh:', err.message);
  errors++;
}

console.log('───────────────────────────────────────────────────────');
if (errors === 0) {
  console.log('🎉 ALL CHECKS PASSED: Website Copy Skill is 100% compliant!');
  process.exit(0);
} else {
  console.error(`💥 Validation failed with ${errors} error(s).`);
  process.exit(1);
}
