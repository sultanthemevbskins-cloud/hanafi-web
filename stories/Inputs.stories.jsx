import { Input } from '@ctos/ui';

export default {
  title: 'CTOS Design System/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    state:   { control: 'radio', options: ['default', 'focus', 'filled', 'error', 'disabled'] },
    variant: { control: 'radio', options: ['default', 'search'] },
    label:         { control: 'text' },
    placeholder:   { control: 'text' },
    hint:          { control: 'text' },
    errorMessage:  { control: 'text' },
  },
  parameters: { backgrounds: { default: 'white' } },
  decorators: [Story => <div style={{ maxWidth: 380, padding: 24 }}><Story /></div>],
};

const wrap = { display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 380, padding: 24 };
const stateLabel = s => (
  <span style={{ fontFamily:'Manrope,sans-serif', fontSize:10, fontWeight:700, color:'#9CA3AF',
    textTransform:'uppercase', letterSpacing:'0.8px', marginBottom:4, display:'block' }}>{s}</span>
);

// Playground
export const Playground = {
  args: {
    label: 'Full name',
    placeholder: 'e.g. Ahmad Faiz',
    hint: 'As shown on your MyKad',
    state: 'default',
    variant: 'default',
  },
};

// All States
export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={wrap}>
      {stateLabel('Default')}
      <Input label="IC Number" placeholder="e.g. 901231-01-5678" hint="Enter your 12-digit MyKad number" state="default" />

      {stateLabel('Focus')}
      <Input label="IC Number" placeholder="e.g. 901231-01-5678" hint="Enter your 12-digit MyKad number" state="focus" />

      {stateLabel('Filled')}
      <Input label="IC Number" placeholder="e.g. 901231-01-5678" value="901231-01-5678" state="filled" />

      {stateLabel('Error')}
      <Input label="IC Number" placeholder="e.g. 901231-01-5678" state="error" errorMessage="Invalid IC number format" />

      {stateLabel('Disabled')}
      <Input label="IC Number" placeholder="e.g. 901231-01-5678" hint="This field is locked" state="disabled" />
    </div>
  ),
};

// Search Variant
export const SearchVariant = {
  name: 'Search Variant',
  render: () => (
    <div style={wrap}>
      {stateLabel('Default')}
      <Input variant="search" placeholder="Search company name..." state="default" />

      {stateLabel('Focus')}
      <Input variant="search" placeholder="Search company name..." state="focus" />

      {stateLabel('Filled')}
      <Input variant="search" placeholder="Search company name..." value="CTOS Data Systems" state="filled" />

      {stateLabel('Disabled')}
      <Input variant="search" placeholder="Search disabled" state="disabled" />
    </div>
  ),
};

// With label + hint
export const WithLabelAndHint = {
  name: 'With Label & Hint',
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    hint: "We'll send your report to this email",
    state: 'default',
  },
};

// Error state
export const ErrorState = {
  name: 'Error State',
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    state: 'error',
    errorMessage: 'Please enter a valid email address',
  },
};

// Form example
export const FormExample = {
  name: 'Form Example',
  render: () => (
    <div style={{ ...wrap, background: '#F9FAFB', borderRadius: 16, padding: 32 }}>
      <h2 style={{ fontFamily:'Plus Jakarta Sans,sans-serif', fontSize:18, fontWeight:700, color:'#111827', margin:'0 0 4px' }}>
        Get Your Free Report
      </h2>
      <p style={{ fontFamily:'Manrope,sans-serif', fontSize:13, color:'#6B7280', margin:'0 0 20px' }}>
        Fill in your details to access your credit report.
      </p>
      <Input label="Full name" placeholder="e.g. Ahmad Faiz bin Ibrahim" hint="As shown on your MyKad" state="default" />
      <Input label="IC Number" placeholder="e.g. 901231-01-5678" state="default" />
      <Input label="Email address" placeholder="you@example.com" state="error" errorMessage="Please enter a valid email address" />
      <Input label="Phone number" placeholder="+60 12-345 6789" state="disabled" hint="Cannot be changed" />
    </div>
  ),
};

