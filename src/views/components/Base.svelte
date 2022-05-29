<script>
  import './example.scss'
  import { Button, Dot, Divider, Badge, Breadcrumbs, Chip, Headline, Subhead, H1, H2, H3, Label } from 'attractions'
  import { User, Home, ArrowRight } from 'tabler-icons-svelte'

  let breadcrumbsItems = [
    { href: '/#/home', text: 'Home' },
    { text: 'Components' },
  ];
</script>

<Button small>
  <Dot danger class="mr-2" /> <span class="text-gray-500">此处仅作展示，具体用法请自行查看源码</span>
</Button>

<!-- 按钮 -->
<Divider class="divider-title" text="按钮 Button" />
<div class="example grid xs:grid-flow-col grid-cols-6 grid-rows-3 gap-4 items-center justify-items-start p-3">
  <Button filled>filled</Button>
  <Button outline>outline</Button>
  <Button>button</Button>
  <Button disabled filled>disabled filled</Button>
  <Button disabled outline>disabled outline</Button>
  <Button disabled>disabled</Button>
  <Button danger filled>danger filled</Button>
  <Button danger outline>danger outline</Button>
  <Button danger noRipple>danger noRipple</Button>
  <Button filled small>filled small</Button>
  <Button outline small>outline small</Button>
  <Button small>small</Button>
  <Button filled>
    <User size="20" class="mr-2" />
    icons
  </Button>
  <Button selected>selected</Button>
  <Button round neutral><User size="20" /></Button>
  <Button round outline><User size="20" /></Button>
  <Button rectangle outline small><User size="20" /></Button>
</div>

<!-- 面包屑 -->
<Divider class="divider-title" text="面包屑 Breadcrumbs" />
<div class="example">
  <Breadcrumbs items={breadcrumbsItems} />
  <Breadcrumbs items={breadcrumbsItems} separator='~' />
  <Breadcrumbs items={breadcrumbsItems}>
    <div slot="item" let:item>
      {#if item.href === '/#/home'}
        <Button href={item.href} round small>
          <Home size="20" />
        </Button>
      {:else}
        <Chip>{item.text}</Chip>
      {/if}
    </div>
    <ArrowRight slot="separator" size="20" />
  </Breadcrumbs>
</div>

<!-- 徽章角标 -->
<Divider class="divider-title" text="徽章角标 Badge" />
<div class="example">
  <Badge>default Badge</Badge>
  <Badge class="w-fit">Badge with class="w-fit"</Badge>
  <Button round>
    <Badge>
      <User size="20" class="icon" />
    </Badge>
  </Button>
</div>

<!-- 文本 -->
<Divider class="divider-title" text="文本 Typography" />
<div class="example">
  <Headline>Headline</Headline>
  <Subhead>Subhead</Subhead>
  <H1>H1</H1>
  <H2>H2</H2>
  <H3>H3</H3>
  <Label>label</Label>
  <Label small>Label small</Label>
</div>
