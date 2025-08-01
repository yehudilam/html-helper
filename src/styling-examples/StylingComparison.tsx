import useGetNow from "../hooks/useGetNow";
import ClockFaceStyled from "./1-styled-components/ClockfaceStyled";
import ClockFaceTailwind from "./2-tailwindcss/ClockfaceTailwind";
import ClockFaceVanilla from "./3-vanilla-extract/ClockfaceVanilla";

const StylingComparison = () => {
  const { now } = useGetNow();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Styling Approaches Comparison
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Styled Components */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
              Styled Components
            </h2>
            <div className="flex justify-center mb-4">
              <ClockFaceStyled now={now} />
            </div>
            <div className="text-sm text-gray-600">
              <h3 className="font-semibold mb-2">Pros:</h3>
              <ul className="list-disc list-inside mb-4">
                <li>CSS-in-JS with full JavaScript power</li>
                <li>Dynamic styling with props</li>
                <li>Scoped styles automatically</li>
                <li>ThemeProvider for design systems</li>
              </ul>
              <h3 className="font-semibold mb-2">Cons:</h3>
              <ul className="list-disc list-inside">
                <li>Runtime CSS generation</li>
                <li>Larger bundle size</li>
                <li>Learning curve for CSS-in-JS</li>
              </ul>
            </div>
          </div>

          {/* TailwindCSS */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center text-green-600">
              TailwindCSS
            </h2>
            <div className="flex justify-center mb-4">
              <ClockFaceTailwind now={now} />
            </div>
            <div className="text-sm text-gray-600">
              <h3 className="font-semibold mb-2">Pros:</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Utility-first, fast development</li>
                <li>Purged CSS, small production builds</li>
                <li>Consistent design system</li>
                <li>No CSS naming conflicts</li>
              </ul>
              <h3 className="font-semibold mb-2">Cons:</h3>
              <ul className="list-disc list-inside">
                <li>HTML can become verbose</li>
                <li>Custom values need inline styles</li>
                <li>Learning curve for utility classes</li>
              </ul>
            </div>
          </div>

          {/* Vanilla Extract */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center text-purple-600">
              Vanilla Extract
            </h2>
            <div className="flex justify-center mb-4">
              <ClockFaceVanilla now={now} />
            </div>
            <div className="text-sm text-gray-600">
              <h3 className="font-semibold mb-2">Pros:</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Zero-runtime CSS-in-TypeScript</li>
                <li>Type-safe styles</li>
                <li>CSS Variables for dynamics</li>
                <li>Excellent performance</li>
              </ul>
              <h3 className="font-semibold mb-2">Cons:</h3>
              <ul className="list-disc list-inside">
                <li>Build-time compilation required</li>
                <li>More setup complexity</li>
                <li>Newer ecosystem</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Code Structure Comparison
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold text-blue-600 mb-2">
                Styled Components
              </h3>
              <code className="text-xs block">
                📁 1-styled-components/
                <br />
                ├── ClockfaceStyled.tsx
                <br />
                └── ClockfaceStyled.styled.tsx
              </code>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold text-green-600 mb-2">TailwindCSS</h3>
              <code className="text-xs block">
                📁 2-tailwindcss/
                <br />
                └── ClockfaceTailwind.tsx
                <br />
                <br />+ tailwind.config.js
              </code>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold text-purple-600 mb-2">
                Vanilla Extract
              </h3>
              <code className="text-xs block">
                📁 3-vanilla-extract/
                <br />
                ├── ClockfaceVanilla.tsx
                <br />
                └── ClockfaceVanilla.css.ts
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylingComparison;
